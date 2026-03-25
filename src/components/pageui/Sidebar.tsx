
import { Button } from "../ui/button"
import {CircleQuestionMark, Home, List, LogOut, Rows2, Users} from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { handleLogout } from "../../api/auth";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
    const navigate = useNavigate();
    const logout  = () => {
        handleLogout();
        navigate("/login");
    }
    const items = [
        {
            name: "Home",
            icon: <Home />,
            link: "/home"
        },
        {
            name: "Projects",
            icon: <List/>,
            link: "/project"
        },
        {
            name: "Teams",
            icon: <Users/>,
            link: "/teams"
        },
        {
            name: "Board",
            icon: <Rows2/>,
            link: "/board"
        }
    ];
    const items2 = [
        {
            name: "Help",
            icon: <CircleQuestionMark />,
        },
        {
            name: "Logout",
            icon: <LogOut/>,
            functionality: () => logout()
        }
    ];
    return (
        <aside className=" flex w-full flex-col justify-between py-3 items-start px-4 min-h-full">
            <div className="w-3/3 h-72 bg-primary flex flex-col items-center p-2 rounded-4xl justify-evenly gap-3">
                {items.map((item) => (
                    // <Tooltip key={item.name}>
                        // <Button variant="secondary" size="lg" className=" rounded-full px-3 py-5 ">
                        //     {item.icon}
                        // </Button>
                    // {/* </Tooltip> */}
                    <Tooltip >
                        <TooltipTrigger>
                            <Button variant="secondary" size="lg" onClick={() => navigate(item.link)} className="cursor-pointer rounded-full px-3 py-5 ">
                                {item.icon}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
            <div className="w-3/3 h-32 bg-custom-primary flex flex-col items-center p-2 rounded-4xl justify-evenly gap-3">
                {items2.map((item) => (
                  <Tooltip key={item.name} >
                        <TooltipTrigger asChild>
                            <Button variant="secondary" size="lg" className="cursor-pointer rounded-full px-3 py-5 " onClick={item.functionality}>
                                {item.icon}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </aside>
    )
}