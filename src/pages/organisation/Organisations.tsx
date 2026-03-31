import { Building2 } from "lucide-react";
import { SectionNavbar } from "../../components/pageui/SectionNavbar";
import { EmptyOrganisations } from "./EmptyOrganisations";
import { useState } from "react";
import { OrganisationForm } from "./OrganisationForm";
import { useNavigate } from "react-router-dom";

export const Organisations = () => {
    const navigate = useNavigate();
    const [organisations, setOrganisations] = useState<any[] | null>(null);
    return (
       <div 
         className="bg-secondary  w-full h-full flex flex-col  items-center rounded-4xl overflow-hidden  animate-in slide-in-from-bottom-5 transition-all duration-500">
        <SectionNavbar
            title="Organisations"
            description="Manage your organisations here."
            titleIcon={<Building2/>}
            createButtonText="Create Organisation"
            onCreate={() => navigate("/organisation/create") }
        />
            <EmptyOrganisations isEmpty={!organisations || organisations.length === 0} />
            {/* <OrganisationForm open={openOrganisationForm} /> */}
       </div>
    );
};