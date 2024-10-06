import * as React from 'react';
import Events from "@/components/shared/eventForm";
import BackgroundImage from '@/components/ui/background-image';

export default function EventForm() {

  return (
    <>
      <BackgroundImage className="h-full w-full flex items-center justify-center">
      < Events />
      </BackgroundImage>
    </>
  );
}