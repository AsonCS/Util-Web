import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'Lottery',
    description: 'Generate random lottery numbers',
    openGraph: {
        title: 'Lottery',
        description: 'Generate random lottery numbers',
        images: ['/lottery/banner.png'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <Suspense>{children}</Suspense>
}
