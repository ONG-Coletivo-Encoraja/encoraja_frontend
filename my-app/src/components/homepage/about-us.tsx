import * as React from "react";
import { CardTitle, CardContent } from "@/components/ui/card";

export function AboutUsCard({ title, content }: { title: string, content: any }) {
  return (
    <div className="h-[250px] w-[400px] bg-transparent m-0 p-0">
      <div className="bg-transparent">
        <CardTitle className="ml-5 text-[#F2F2F2]">
          {title}
        </CardTitle>
        <CardContent className="mt-4 text-[#F2F2F2]">
          {content}
        </CardContent>
      </div>  
    </div>
  );
}