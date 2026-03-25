import { Outlet } from "react-router-dom"

export const Body = () => {
    return (
        <main className="w-full h-full col-span-11 p-3 ">
            <Outlet/>
        </main>
    )
}