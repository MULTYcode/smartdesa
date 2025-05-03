import React from 'react'

export default function PageContent({ children }: { children: React.ReactNode }) {
    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                {children}
            </div>
        </main>
    )
}
