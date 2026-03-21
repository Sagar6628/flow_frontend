import { useTheme } from "../../context/ThemeContext";
import dark from "../../assets/Flow_Dark.png";
import light from "../../assets/Flow_Light.png";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Bell, Search, Sun } from "lucide-react";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export const Navbar = () => {
  const { theme,toggleTheme } = useTheme();
  return (
    <nav className="h-[10vh] flex items-center justify-between">
      <div className=" top-0 left-0 w-32 h-12 inset-0 z-0">
        <img
          src={theme === "dark" ? dark : light}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 flex items-center justify-center gap-3">
        <div className="flex items-center border rounded-full p-2 border-primary">
            <Bell className="text-primary" />
        </div>
        <div className="flex items-center border rounded-full p-2 border-primary">
            <Search className="text-primary" />
        </div>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="secondary" onClick={toggleTheme} className="cursor-pointer flex items-center border rounded-full p-2 border-primary">
                  <Sun className="text-primary" />
                </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
                <p>Toggle Theme</p>
            </TooltipContent>
        </Tooltip>
       <Avatar className="" size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SH</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
