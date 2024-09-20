import { DefaultCard } from '@/components/beneficiary/home/defaultcard';
import { NextEventsCard } from '@/components/beneficiary/home/nexteventscard';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className='m-5'>
        <img src='/img/girlshome.png' />
      </div>
      <Separator />
      <div className="flex justify-center mt-5">
        <DefaultCard />
        <div className='ml-8'></div>
        <NextEventsCard />
      </div>
    </div>
  );
}