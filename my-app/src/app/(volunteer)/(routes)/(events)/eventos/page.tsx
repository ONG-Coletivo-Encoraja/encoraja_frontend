import * as React from 'react';
import { EventsList } from "@/components/volunteer/events/eventsList";
import BackgroundImage from '@/components/ui/background-image';

export default function Home() {

  return (

    <div className="bg-[#ededed]">
        <EventsList />
    </div>
  );
}
