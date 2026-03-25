import { useState } from "react";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../components/ui/empty";
import { ArrowBigLeft, ArrowLeft, ArrowUpRightIcon,  Folder, PlusCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { SectionNavbar } from "../../components/pageui/SectionNavbar";

const EmptyProjects: React.FC<{ isEmpty: boolean }> = ({ isEmpty }) => {
  return (
    isEmpty && (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Folder />
          </EmptyMedia>
          <EmptyTitle>No Projects Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any projects yet. Get started by creating
            your first project.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </EmptyContent>
        <Button
          variant="link"
          asChild
          className="text-muted-foreground"
          size="sm"
        >
          <a href="#">
            Learn More <ArrowUpRightIcon />
          </a>
        </Button>
      </Empty>
    )
  );
};
export const Project = () => {
  const [projects, setProjects] = useState<any[] | null>(null);

  return (
    <div className="bg-secondary w-full h-full flex flex-col justify-center items-center rounded-4xl overflow-hidden p-3 animate-in slide-in-from-bottom-5 transition-all duration-500">
        {/* <div className="w-full flex ">
            <Button variant="default" size="icon-lg" className="rounded-full mr-3 ">
                <ArrowLeft  className="" />
            </Button>
            <div className="">
                <div className="flex items-center gap-2">
                    <Folder/> 
                    <h1 className="text-2xl font-bold">  Projects</h1>
                </div>
                <p className="text-sm text-muted-foreground">Manage your projects here.</p>
             </div> 
                <Button variant="default" size="default" className="ml-auto  ">
                    <PlusCircle/>
                    Create Project
                </Button>
        </div> */}
        <SectionNavbar
            title="Projects"
            description="Manage your projects here."
            titleIcon={<Folder/>}
            createButtonText="Create Project"
        />
        <EmptyProjects isEmpty={!projects || projects.length === 0} />
    </div>
  );
};
