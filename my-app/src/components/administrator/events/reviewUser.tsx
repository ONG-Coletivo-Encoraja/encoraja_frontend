'use client';

import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/rating";
import { CircleUserRound, Link } from "lucide-react";

export default function ReviewUser() {
  
return (
    <div>
        <div className="flex gap-2">
            <CircleUserRound className="w-10 h-10 opacity-50" />
            <div className="flex flex-col">
                <Label className="text-l">Juliana Baiçar</Label>
                <StarRating />
            </div>
            <div className="ml-10">
                <Label className="text-xs text-[#727272]">17/07/2024 às 22:50 PM</Label>
            </div>
        </div>
        <div className="mt-2">
            <p className="text-xs text-[#727272]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, laborum veniam. Quidem voluptatibus voluptate laboriosam iste expedita at, itaque tempora veniam porro totam quod amet nihil repudiandae corporis, similique soluta!</p>
        </div>
    </div>
);

}