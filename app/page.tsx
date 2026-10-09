"use client"
import PromptForm from '@/components/prompt/prompt-form'
import PromptResult from '@/components/prompt/prompt-result'
import PromptHistory from '@/components/prompt/prompt-history'
import {usePrompts} from '@/app/hooks/usePrompts'


export default function Home() {  
const { history, generate } = usePrompts()
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
        <div className="text-xl font-bold text-red-600 bg-white border-b-2 border-slate-200 w-full px-4 py-2">AI Prompt Analytics Dashboard</div>
        <div className='max-w p-8 grid gap-6 lg:grid-cols-[1.6fr_1fr] items-center sm:items-start'>
            <PromptForm onSubmit={generate.mutate} isPending={generate.isPending} />
            
            <div className='card'>
                <label>Chart</label>
            </div>

            <PromptResult data={generate.data} isPending={generate.isPending} />

            <div className='card'>
                <label>Recent Prompts Table</label>
            </div>

            <PromptHistory items={history.data ?? []} />
        </div>
    </main>
  );
}
