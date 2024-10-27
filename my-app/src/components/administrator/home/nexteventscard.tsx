'use client';

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast";
import { Event } from "@/interfaces/IEventData";
import API from "@/services/api";
import { CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function NextEventsCard() {
  const { toast } = useToast();
  const { data: session } = useSession();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchData = async () => {
        if (session?.token) {
            setLoading(true);
            try {
                const result = await API.get('/users/events', {
                    headers: {
                        'Authorization': `Bearer ${session?.token}`,
                        'Content-Type': 'application/json',
                    },
                    params: {
                        status: 'active',
                    },
                });
                setEvents(result.data.events.data);
            } catch (error) {
                console.error('Error fetching inscriptions:', error);
            } finally {
                setLoading(false);
            }
        }
      };

      fetchData();
  }, [session]);

  return (
    <Card className="w-[500px]">
      <CardDescription className =" text-[#F69053]">Próximos eventos</CardDescription>
      {loading ? (
                <div className="flex justify-center items-center">
                    <CircularProgress />
                </div>
      ) : (
      <div>
      {events.map((event) => (
        <div  key={event.id}>
          <CardHeader>
            <CardTitle>{event.name}</CardTitle>
            <ul className="flex space-x-4">
              <li><Badge variant={'secondary'}>{event.time}</Badge></li>
              <li><Badge>{event.modality}</Badge></li>
              <li><Badge>{event.type}</Badge></li>
              <li><Badge variant={'tertiary'}>{event.workload}h</Badge></li>
              <li><Badge className=" h-[50px] rounded-[25%] " variant={'quaternary'}>{event.date}</Badge></li>
            </ul>
            <Label className=" text-[#727272]">Responsável: {event.user_owner.name}</Label>
          </CardHeader>
          <CardContent>
            <Separator />
          </CardContent>
        </div>
      ))}
      </div>
    )}
    </Card>
  )
}