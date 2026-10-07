"use client"
import PromptForm from '@/components/prompt/prompt-form'
import PromptResult from '@/components/prompt/prompt-result'
import PromptHistory from '@/components/prompt/prompt-history'
import {usePrompts} from '@/app/hooks/usePrompts'


export default function Home() {  
const { history, generate } = usePrompts()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-red-600">AI Prompt Analytics Dashboard</h1>
        <PromptForm onSubmit={generate.mutate} isPending={generate.isPending} />
        <PromptResult data={generate.data} isPending={generate.isPending} />
        <PromptHistory items={history.data ?? []} />

        <section>Chart</section>

        <section>Recent Prompts Table</section>
      </main>
    </div>
  );
}
