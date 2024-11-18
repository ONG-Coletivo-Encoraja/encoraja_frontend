import React from 'react';
import { InscriptionsCard } from '@/components/administrator/home/inscriptionsCard.tsx';
import { NextEventsCard } from '@/components/administrator/home/nexteventscard';
import { Separator } from '@/components/ui/separator';
import { RequestsCard } from '@/components/administrator/home/requestsCard';

export default function HomeAdmin() {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className='m-5'>
        <img src='/img/girlshome.png' />
      </div>
      <Separator />
      <div className="flex flex-wrap justify-center mt-5 gap-10">
          <InscriptionsCard />

          <NextEventsCard />

          <RequestsCard />

      </div>
    </div>
  );
}
