import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function Page() {
  return (
      <div className="w-10 border-r h-dvh has-[:hover]:w-40 bg-neutral-400 group transition-all duration-500 overflow-hidden">
        <Button variant="ghost" size="icon">
          <Home size={40} />
          <span className="sr-only">Home</span>
        </Button>
      </div>
  );
}