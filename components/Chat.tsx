"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [emotion, setEmotion] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitting message:", input) // Add this line
    try {
      const response = await handleSubmit(e)
      console.log("Chat response:", response)
      // Extract emotion from the AI response
      const emotionMatch = response?.match(/\[EMOTION:(.*?)\]/)
      if (emotionMatch) {
        setEmotion(emotionMatch[1].trim())
      }
    } catch (error) {
      console.error("Error in chat submission:", error)
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Chat with EmpathAI</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          {messages.map((m) => (
            <div key={m.id} className="mb-4">
              <p className="font-semibold">{m.role === "user" ? "You" : "EmpathAI"}:</p>
              <p>{m.content}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={onSubmit} className="flex w-full space-x-2">
          <Input value={input} onChange={handleInputChange} placeholder="Type your message..." />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
      {emotion && <div className="p-4 bg-blue-100 dark:bg-blue-900 text-center">Detected emotion: {emotion}</div>}
    </Card>
  )
}

