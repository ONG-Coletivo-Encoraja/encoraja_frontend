import * as React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function AboutUsCard({ title, content }: { title: string, content: any }) {
  return (
    <div className="h-[250px] w-[400px]">
      <div>
        <CardTitle className="ml-5">
          {title}
        </CardTitle>
        <CardContent className="mt-4">
          {content}
        </CardContent>
      </div>
    </div>
  );
}
