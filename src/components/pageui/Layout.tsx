import { Body } from "./Body"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export const Layout  = () => {
    return (
        <div >
            <Navbar/>
            <div className="grid grid-cols-12 w-full h-[93vh] overflow-hidden">
                <Sidebar/>
                <Body/>
            </div>
        </div>
    )
}