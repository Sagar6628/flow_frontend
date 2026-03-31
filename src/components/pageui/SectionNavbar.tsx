import { ArrowLeft, PlusCircle } from "lucide-react"
import { Button } from "../ui/button"
import type React from "react"
import { useNavigate } from "react-router-dom"

interface SectionNavbarProps {
    title:string,
    description:string,
    children?: React.ReactNode,
    onBack?: () => void,
    onCreate?: () => void
    titleIcon?: React.ReactNode
    createButtonText?: string
}
export const SectionNavbar :React.FC<SectionNavbarProps> = ({title, description, children, onBack, onCreate, titleIcon, createButtonText}) => {
    const goBack = useNavigate();
    return (

        <div className="w-full flex p-3">
            <Button variant="default" size="icon-lg" className="rounded-full mr-3 " onClick={()=>{goBack(-1)}}>
                <ArrowLeft  className="" />
            </Button>
            <div className="">
                <div className="flex items-center gap-2">
                    {titleIcon}
                    <h1 className="text-2xl font-bold">{title}</h1>
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
             </div> 
             {
                children&&children                
             }
             {
                createButtonText&&(
                    <Button variant="default" size="default" className="ml-auto cursor-pointer  " onClick={onCreate}>
                        <PlusCircle/>
                        {createButtonText}
                    </Button>
                )
             }
            
        </div>
    )
}