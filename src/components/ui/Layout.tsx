import { Body } from "./Body"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export const Layout  = () => {
    return (
        <div >
            <Navbar/>
            <div className="grid grid-cols-12 w-full h-[90vh]">
                <Sidebar/>
                <Body/>
            </div>
        </div>
    )
}