import * as React from "react";
import { CardTitle, CardContent } from "@/components/ui/card";

export function AboutUsCard({ icon, title, content }: { icon: string, title: string, content: any }) {
  return (
    <div className="w-[400px] bg-transparent m-0 p-0 flex flex-col items-center text-center">
      <div className="bg-transparent p-4">
        <img src={icon} alt={`${title} icon`} className="w-[100px] h-[100px] md:mb-4 object-cover" />

        <div className="bg-transparent p-4 text-center">
          <CardTitle className="text-[#F2F2F2] text-xl font-bold mb-2">
            {title}
          </CardTitle>
          <CardContent className="text-[#F2F2F2] text-base">
            {content}
          </CardContent>
        </div>  
      </div>
    </div>
  );
}
