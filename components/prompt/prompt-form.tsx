// components/prompt/prompt-form.tsx
"use client"

import { useState } from "react"

type PromptFormProps = {
  onSubmit: (prompt: string) => void
  isPending: boolean
}

export default function PromptForm({ onSubmit, isPending }: PromptFormProps) {
  const [text, setText] = useState("")

  function handleSubmit() {
    if (!text.trim()) return // ignore empty prompts
    onSubmit(text)
    setText("") // clear the box
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2>Input your Prompt</h2>
      <textarea
        className="p-2 rounded border-2 border-gray-500 w-full"
        value={text}
        rows={5}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="p-3 bg-blue-500 rounded-xl text-white hover:bg-blue-400 disabled:opacity-50"
        onClick={handleSubmit}
        disabled={isPending}
      >
        {isPending ? "Generating..." : "Generate"}
      </button>
    </div>
  )
}