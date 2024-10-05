import { Label } from "@/components/ui/label";
import StarRating from "@/components/ui/rating";
import { CircleUserRound } from "lucide-react";
import { FC } from "react";

interface ReviewUserProps {
  userName: string;
  rating: number;
  observation: string;
}

const ReviewUser: FC<ReviewUserProps> = ({ userName, rating, observation }) => {
  return (
    <div className="border p-4 rounded-xl">
      <div className="flex gap-2">
        <CircleUserRound className="w-10 h-10 opacity-50" />
        <div className="flex flex-col">
          <Label className="text-lg">{userName}</Label>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-xs text-[#727272]">{observation}</p>
      </div>
    </div>
  );
};

export default ReviewUser;