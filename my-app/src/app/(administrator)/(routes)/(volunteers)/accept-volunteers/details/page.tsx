'use client';

import * as React from 'react';
import { RequestVolunteerDetailsCard } from "@/components/administrator/users/requestVolunteerDetails";
import BackgroundImage from '@/components/ui/background-image';

export default function RequestVolunteer() {

  return (
    <div className="h-screen">
      <BackgroundImage className="h-full w-full flex items-center justify-center">
        
       <RequestVolunteerDetailsCard />
      </BackgroundImage>
    </div>
  );
}