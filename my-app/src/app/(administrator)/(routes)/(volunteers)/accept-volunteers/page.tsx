import * as React from 'react';
import { RequestVolunteerList } from "@/components/administrator/users/requestVolunteerList";
import BackgroundImage from '@/components/ui/background-image';

export default function RequestVolunteer() {

  return (
    <div className="h-screen">
      <BackgroundImage className="h-full w-full flex items-center justify-center">
        <RequestVolunteerList />
      </BackgroundImage>
    </div>
  );
}