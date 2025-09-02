import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { Footer } from "../../components/Footer"

export const Important = () => {
    return (
        <>
        <Navbar />
        <main className="flex gap-3 min-h-screen overflow-x-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <h3>This page is not yet built.</h3>
            </div>
        </main>
        <Footer />
        </>
    )
}
