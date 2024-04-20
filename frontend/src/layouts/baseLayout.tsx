import Navbar from "@/components/navbar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='w-full'>
            <header>
                <Navbar />
            </header>
            <main className='max-w-screen-lg mx-auto'>
                <div className="mt-12">
                    {children}
                </div>
            </main>
            <footer>
                Hello to the world of savages
            </footer>
        </div>
    )
}