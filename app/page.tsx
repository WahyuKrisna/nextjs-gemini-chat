"use client"
import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query"
import { useState } from 'react';
import { PromptRecord } from "@/types/prompt"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function Home() {  
const [userPrompt, setUserPrompt] = useState(""); 
const queryClient = useQueryClient() 
  const mutation = useMutation({
    mutationFn: async (prompt: string) => {
      const res = await fetch("/api/prompts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      return res.json()
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["prompts"] })
    },
  })

    const { data } = useQuery<PromptRecord[]>({
        queryKey: ["prompts"],
        queryFn: () => fetch("/api/prompts").then(res => res.json())
    })
    

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-3xl font-bold text-red-600">
            AI Prompt Analytics Dashboard
        </div>
       
        <section>Input your Prompt </section>
            <textarea className="p-2 rounded border-2 border-grey-500 w-full"
            value={userPrompt} rows-5 onChange={(e) => setUserPrompt(e.target.value)}/>
            <button className="p-3 bg-blue-500 rounded-xl text-white hover:bg-blue-400" 
            onClick={() => mutation.mutate(userPrompt)}>
                Generate
            </button>

            <section>Prompt Result</section>
            {mutation.isPending && <p>Loading...</p>}
            {mutation.data && 
            <div className="ai-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {mutation.data.response}
                </ReactMarkdown>
            </div>}
            
        <section>Prompt History</section>
        {data?.map((item, index) => (
        <div key={index}>
            <p><b>Prompt:</b> {item.prompt}</p>
            <p><b>Response:</b></p>
            <div className="ai-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.response}
                </ReactMarkdown>
            </div>
        </div>
        ))}

        <section>Chart</section>

        <section>Recent Prompts Table</section>
      </main>
    </div>
  );
}
