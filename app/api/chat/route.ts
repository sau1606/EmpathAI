import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: openai("gpt-4-turbo"),
      messages: [
        {
          role: "system",
          content: `You are EmpathAI, an emotional support chatbot. Analyze the user's message for emotions and sentiment. 
          Provide a supportive response and include an [EMOTION:] tag with the detected primary emotion. 
          Offer personalized recommendations based on the detected emotion, such as meditation for stress, 
          breathing exercises for anxiety, or positive affirmations for low mood. Always maintain a compassionate and understanding tone.`,
        },
        ...messages,
      ],
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat route:", error)
    return new Response(JSON.stringify({ error: "An error occurred during the request." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

