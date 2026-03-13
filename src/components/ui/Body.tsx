import { Outlet } from "react-router-dom"

export const Body = () => {
    return (
        <main className="bg-green-300 w-full h-full col-span-9">
            <h1>Body</h1>
            <Outlet/>
        </main>
    )
}