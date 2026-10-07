import { NextResponse } from "next/server"
import { model } from "@/lib/gemini"
import { promptHistory } from "@/lib/store"

export async function POST(req: Request) {
  const { prompt } = await req.json()
    if (!prompt) {
    return NextResponse.json(
        { error: "Prompt is missing" },
        { status: 400 }
    )
    }
  const start = Date.now()

  try {
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    const end = Date.now()

    promptHistory.push({
        prompt,
        response: text,
        responseTime: (end - start) / 1000,
        createdAt: new Date(),
    })

    return NextResponse.json({
      response: text,
      responseTime: (end - start) / 1000,
      status: "success",
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to generate response", status: "error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return Response.json(promptHistory)
}