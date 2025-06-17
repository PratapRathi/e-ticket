// components/WebSocketClient.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

export default function WebSocketClient() {
  const [messages, setMessages] = useState<string[]>([])
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    // Trigger server init (GET /api/socket)
    fetch('/api/socket')

    const socket = new WebSocket('ws://localhost:3001')
    socketRef.current = socket

    socket.onopen = () => {
      console.log('Connected to WebSocket server')
      socket.send('Hello from client')
    }

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data])
    }

    return () => {
      socket.close()
    }
  }, [])

  return (
    <div>
      <h2>WebSocket Client</h2>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  )
}
