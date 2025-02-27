'use client'

import { generateNumbers } from '../util/number'

export default function Lottery() {
    let amount = undefined
    let max = undefined
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        amount = parseInt(params.get('amount') || '')
        max = parseInt(params.get('max') || '')
    }

    return (
        <main className="flex flex-col gap-8 items-center p-8 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl">Lottery</h1>
            <form
                className="border-4 border-zinc-600 flex flex-col gap-4 p-6 rounded-2xl"
                onSubmit={(e) => {
                    e.preventDefault()
                    const max = parseInt((e.target as any).max.value)
                    const amount = parseInt((e.target as any).amount.value)
                    const numbers = generateNumbers(max, amount)
                    const generateNumbersElement =
                        document.getElementById('generate_numbers')
                    if (generateNumbersElement) {
                        generateNumbersElement.innerHTML = numbers
                    }
                }}
                target="#"
            >
                <span className="content-center">
                    Generate random lottery numbers
                </span>
                <div className="flex flex-col gap-4">
                    <label className="flex gap-4 justify-between">
                        <span className="content-center">Max number</span>
                        <input
                            className="w-20 p-2 border border-solid border-black/[.08] dark:border-white/[.145] rounded"
                            id="max"
                            name="max"
                            placeholder="25"
                            type="number"
                            defaultValue={max || ''}
                        />
                    </label>
                    <label className="flex gap-4 justify-between">
                        <span className="content-center">
                            Amount of numbers
                        </span>
                        <input
                            className="w-20 p-2 border border-solid border-black/[.08] dark:border-white/[.145] rounded"
                            id="amount"
                            name="amount"
                            placeholder="15"
                            type="number"
                            defaultValue={amount || ''}
                        />
                    </label>
                    <button
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm h-10 px-4"
                        type="submit"
                    >
                        Generate numbers
                    </button>
                    <span className="content-center" id="generate_numbers" />
                </div>
            </form>
        </main>
    )
}
