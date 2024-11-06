import * as React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function EventsCard({ img, content, title }: { img: React.ReactNode; content: React.ReactNode; title: string }) {
  return (
    <Card className="w-[400px] p-4">
      <div>
        <CardHeader className="ml-5">
            {img}
        </CardHeader>
        <CardContent className="mt-4">
          <div>
          <Label className="text-bold text-xl text-[#702055]">{title}</Label>
          </div>
          {content}
        </CardContent>
      </div>
    </Card>
  );
}
