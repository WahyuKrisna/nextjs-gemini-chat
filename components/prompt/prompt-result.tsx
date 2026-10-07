// components/prompt/prompt-result.tsx
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type PromptResultProps = {
  data?: { response: string }
  isPending: boolean
}

export default function PromptResult({ data, isPending }: PromptResultProps) {
  return (
    <div>
      <h2>Prompt Result</h2>
      {isPending && <p>Loading...</p>}
      {data && (
        <div className="ai-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data.response}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )
}