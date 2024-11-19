import  React from "react";
import { CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function EventsCard({ img, content, title }: { img: React.ReactNode; content: React.ReactNode; title: string }) {
  return (
    <div className="w-[400px] m-0 p-0 bg-transparent"> 
      <div className="bg-transparent">
        <CardHeader className="ml-5">
            {img}
        </CardHeader>
        <CardContent className="mt-4">
          <div>
            <Label className="text-bold text-xl text-[#F2F2F2]">{title}</Label>
          </div>
          {content}
        </CardContent>
      </div>
    </div>
  );
}