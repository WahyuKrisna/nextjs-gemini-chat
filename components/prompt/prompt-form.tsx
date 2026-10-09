// components/prompt/prompt-form.tsx
"use client"

import { useState } from "react"

type PromptFormProps = {
  onSubmit: (prompt: string) => void
  isPending: boolean
}

export default function PromptForm({ onSubmit, isPending }: PromptFormProps) {
  const [text, setText] = useState("")
  const [emptyInput, setEmptyInput] = useState(false)

  function handleSubmit() {
    if (!text.trim()) {
        setEmptyInput(true) // ignore empty prompts
    }else{
        setEmptyInput(false)
        onSubmit(text)
        setText("") // clear the box
    } 
  }

  return (
    <div className="card">
      <label className="font-bold">Input your Prompt</label>
      <textarea
        className="my-4 bg-white border border-slate-200 rounded-xl w-full p-2"
        value={text}
        rows={4}
        placeholder="eg. Give me 3 books recommendation under 200 words"
        onChange={(e) => {setText(e.target.value); setEmptyInput(false);}}
        disabled={isPending}
      />
      <div className={emptyInput ? 'text-red-600':'hidden'} >Please fill the prompt</div>
      <div className="flex justify-end">
        <button
            className="bg-indigo-600 text-white rounded-lg px-6 py-2.5 font-semibold hover:bg-indigo-500"
            onClick={handleSubmit}
            disabled={isPending}
        >
            {isPending ? "Generating..." : "Generate"}
        </button>
      </div>
      
    </div>
  )
}