// components/prompt/prompt-result.tsx
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { PromptRecord } from "@/types/prompt"

type PromptHistoryProps = {
  items: PromptRecord[]
}

export default function PromptResult({ items }: PromptHistoryProps) {
  return (
    <div>
      <section>Prompt History</section>
        {items?.map((item, index) => (
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
    </div>
  )
}