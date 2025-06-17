import { db } from "@/database/drizzle";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID!,
      clientSecret: process.env.KEYCLOAK_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;      
        token.role = user.role;   
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;  
        session.user.role = (token as { role?: string }).role;  
      }
      return session;
    },
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.AUTH_SECRET
};
