// app/api/socket/route.ts
import { NextRequest } from 'next/server'

let wss: import('ws').WebSocketServer | undefined

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  if (!wss) {
    console.log('[WS] Initializing WebSocket server...')

    const { WebSocketServer } = await import('ws')
    const http = await import('http')

    const server = http.createServer()

    wss = new WebSocketServer({ server })

    wss.on('connection', (ws) => {
      console.log('[WS] Client connected')

      ws.on('message', (msg) => {
        console.log('[WS] Received:', msg.toString())
        ws.send(`[echo] ${msg}`)
      })
    })

    server.listen(3001, () => {
      console.log('[WS] Listening on ws://localhost:3001')
    })
  }

  return new Response('WebSocket server is running', { status: 200 })
}
