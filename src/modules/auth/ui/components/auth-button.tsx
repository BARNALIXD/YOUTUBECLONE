import { Button } from "@/components/ui/button";
import { UserCheck2Icon } from "lucide-react";

export const AuthButton = () => {
  return (
   <Button>
    <UserCheck2Icon>
        Sign In
    </UserCheck2Icon>
   </Button>
  );
};