// components/prompt/prompt-result.tsx
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { PromptRecord } from "@/types/prompt"

type PromptHistoryProps = {
  items: PromptRecord[]
}

export default function PromptResult({ items }: PromptHistoryProps) {
  return (
    <div className="card">
      <label className="font-bold">Prompt History</label>
        {items.slice(1)?.map((item, index) => (
        <div className="my-4" key={index}>
            <div className="font-bold">{item.prompt}</div>
            <div className="text-slate-400">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.response.slice(0, 60) + '...'} 
                </ReactMarkdown>
            </div>
        </div>
        ))}
    </div>
  )
}