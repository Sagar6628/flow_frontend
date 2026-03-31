import { PlusIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../components/ui/empty";
import type React from "react";

export const EmptyOrganisations:React.FC<{isEmpty: boolean}> = ({isEmpty}) => {
  return (
   isEmpty && (
     <Empty className="w-full h-full animate-in slide-in-from-bottom-5  transition-all duration-500">
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No Organisations</EmptyTitle>
        <EmptyDescription>
          Create an Organisation to manage your projects and teams effectively.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Create Organisation
        </Button>
      </EmptyContent>
    </Empty>
   )
  );
};
