import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Event } from "@/interfaces/IEventData";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {

  let statusColor;
  switch (event.status) {
    case "active":
      statusColor = "bg-green-300";
      break;
    case "inactive":
      statusColor = "bg-red-300"; 
      break;
    case "pending":
      statusColor = "bg-yellow-300"; 
      break;
    case "finished":
      statusColor = "bg-gray-200"; 
      break;
  }

  return (
    <Card className="w-full rounded-xl min-h-[350px] max-h-[500px]">
      <CardHeader className="">
        <CardDescription className="text-[#F69053]">Próximos eventos</CardDescription>
        <CardTitle>{event.name}</CardTitle>
        <ul className="flex flex-wrap space-x-4 gap-3">
          <li><Badge variant={'secondary'}>{event.time}</Badge></li>
          <li><Badge>{event.modality}</Badge></li>
          <li><Badge>{event.type}</Badge></li>
          <li><Badge  className={statusColor} >{event.status}</Badge></li>
          <li><Badge className="h-[50px]" variant={'quaternary'}>{new Date(event.date).toLocaleDateString()}</Badge></li>
        </ul>
        <Label className="text-[#727272]">Responsável: {event.user_owner?.name}</Label>
      </CardHeader>
      <CardContent>
        <Separator />
        <br />
        <Label className="text-[#727272]">{event.description}</Label>
      </CardContent>
      {/*
     <CardFooter className="flex justify-end">
        {event.status != 'finished' && event.user_owner.id === session?.user.id && (<Button>Editar</Button>)}
      </CardFooter>
          */}
    </Card>
  );
}