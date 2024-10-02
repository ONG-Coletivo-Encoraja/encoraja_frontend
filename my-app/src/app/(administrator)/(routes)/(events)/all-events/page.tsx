import * as React from 'react';
import { EventsList } from "@/components/administrator/events/eventsList";
import BackgroundImage from '@/components/ui/background-image';

export default function Events() {

  return (
    <div className="h-screen">
      <BackgroundImage className="h-full w-full flex items-center justify-center">
        <EventsList />
      </BackgroundImage>
    </div>
  );
}