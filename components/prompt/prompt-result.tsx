// components/prompt/prompt-result.tsx
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type PromptResultProps = {
  data?: { response: string }
  isPending: boolean
}

export default function PromptResult({ data, isPending }: PromptResultProps) {
  return (
    <div className="card">
      <label className="font-bold">Prompt Result</label>
      {isPending && <p>Loading...</p>}
      {data && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data.response}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )
}