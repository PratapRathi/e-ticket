export const environment = {
  production: true,
  KEYCLOAK_POSTGRES_USER : "keycloak",
  KEYCLOAK_POSTGRES_PASSWORD : "password",
  POSTGRES_USER : "appuser",
  POSTGRES_PASSWORD : "app_password",
  KEYCLOAK_ADMIN : "admin",
  KEYCLOAK_ADMIN_PASSWORD : "admin",
  DATABASE_URL : "postgresql://appuser:app_password@localhost:5432/appdb",
  AUTH_SECRET : "PeANsTONB31nITUALGZfLYpB+rR0o2ukobInhC4kQCM=",
  KEYCLOAK_ID : "basic-auth-frontend",
  KEYCLOAK_SECRET : "Y5sBe98mWnxP8v7w1fqldy6u7i6zTgap",
  KEYCLOAK_ISSUER : "http://localhost:8080/realms/basic-auth",
};


// VS code extensions 
// ESLint – for linting (dbaeumer.vscode-eslint)
// Prettier – for consistent formatting (esbenp.prettier-vscode)
// Tailwind CSS IntelliSense – class autocomplete (bradlc.vscode-tailwindcss)


// // pages/api/socket.js
// import WebSocket from 'ws';
// export default async function handler(req, res) {
//  const wss = new WebSocket.Server({ noServer: true });
// wss.on('connection', function connection(ws) {
//  ws.on('message', function incoming(message) {
//  console.log('received: %s', message);
//  ws.send(message);
//  });
//  });
// // Upgrade HTTP request to WebSocket connection
//  if (!res.writableEnded) {
//  res.writeHead(101, {
//  'Content-Type': 'text/plain',
//  'Connection': 'Upgrade',
//  'Upgrade': 'websocket'
//  });
//  res.end();
//  }
// wss.handleUpgrade(req, req.socket, Buffer.alloc(0), function done(ws) {
//  wss.emit('connection', ws, req);
//  });
// }


// // components/SocketComponent.js
// import { useEffect } from 'react';
// const SocketComponent = () => {
//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:3000/api/socket');
//     ws.onopen = () => {
//       console.log('Connected to WebSocket');
//       ws.send('Hello, WebSocket!');
//     };
//     ws.onmessage = (event) => {
//       console.log('Message received:', event.data);
//     };
//     ws.onclose = () => {
//       console.log('WebSocket connection closed');
//     };
//     return () => {
//       ws.close();
//     };
//   }, []);
//   return <div>WebSocket Example</div>;
// };
// export default SocketComponent;