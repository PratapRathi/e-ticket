import { db } from "@/database/drizzle";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();
        if (!session?.user?.id) return null;

        const currentUser = db.query.users.findFirst({
            where: (users, { eq }) => eq(users.id, session?.user?.id as string)
        })

        if (!currentUser) return null;

        return currentUser;

    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
}