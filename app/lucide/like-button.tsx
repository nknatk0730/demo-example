'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";

export const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <Button size='icon' className="size-20" variant="outline" onClick={() => setLiked((v) => !v)}>
        <Heart
          strokeWidth={1}
          size={80}
          className={cn(
            "text-pink-400 transition duration-500 fill-transparent",
            liked && "fill-current stroke-[4px]"
          )}
        />
        <span className="sr-only">like {liked ? "off" : "on"}</span>
      </Button>
    </div>
  );
}