import { Users } from "lucide-react"
import { SectionNavbar } from "../../components/pageui/SectionNavbar"
import { useState } from "react"
import { EmptyTeams } from "./EmptyTeams"

export const Teams = () => {
    const [teams, setTeams] = useState<any[] | null>(null)
    return (
        <div className="bg-secondary w-full h-full flex flex-col  items-center rounded-4xl overflow-hidden p-3 animate-in slide-in-from-bottom-5  transition-all duration-500  ">
            <SectionNavbar
                title="Teams"
                description="Manage your teams here."
                titleIcon={<Users/>}
                createButtonText="Invite Members"
            />
            <EmptyTeams isEmpty={!teams || teams.length === 0}  />
        </div>
    ) 
}