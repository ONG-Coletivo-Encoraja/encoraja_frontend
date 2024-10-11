import React from 'react';
import EventsDatails from '@/components/volunteer/events/eventsDetails';
import BackgroundImage from '@/components/ui/background-image';

export default function Events() {
  return (
    
    <div className="h-screen">
        <BackgroundImage className="h-full w-full flex items-center justify-center">
            <EventsDatails />
        </BackgroundImage>
    </div>
  );
};
