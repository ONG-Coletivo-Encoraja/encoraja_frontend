'use client';

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Event } from "@/interfaces/IEventData";
import API from "@/services/api";
import { CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { translateModalityEvent, translateTypeEvent } from "@/services/translate";

export function NextEventsCard() {
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
              status: 'pending',
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
    <Card className="min-w-[300px] w-[400px]">
      <CardHeader>
      <CardDescription className=" text-[#F69053]">Eventos pendentes</CardDescription>
      </CardHeader>
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div>
          {events.map((event) => (
            <div key={event.id}>
              <CardContent>
                <Link href={`/eventos/detalhes/${event.id}`}>
                  <CardTitle>{event.name}</CardTitle>
                </Link>
                <ul className="flex space-x-4">
                  <li><Badge variant={'secondary'}>{event.time}</Badge></li>
                  <li><Badge>{translateModalityEvent(event.modality)}</Badge></li>
                  <li><Badge>{translateTypeEvent(event.type)}</Badge></li>
                  <li><Badge variant={'tertiary'}>{event.workload}h</Badge></li>
                  <li><Badge className=" h-[50px] rounded-[25%] " variant={'quaternary'}>{event.date}</Badge></li>
                </ul>
                <Label className=" text-[#727272]">Responsável: {event.user_owner.name}</Label>
                <Separator />
              </CardContent>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}