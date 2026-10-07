import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query"
import { PromptRecord } from "@/types/prompt"

export function usePrompts() {
  const queryClient = useQueryClient()
  const history = useQuery<PromptRecord[]>({
          queryKey: ["prompts"],
          queryFn: () => fetch("/api/prompts").then(res => res.json())
    })
  const generate = useMutation({
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
  return { history, generate }
}