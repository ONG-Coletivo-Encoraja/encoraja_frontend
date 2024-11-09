import { MyInscriptionsCard } from '@/components/beneficiary/home/myInscriptionsCard';
import { NextEventsCard } from '@/components/beneficiary/home/nexteventscard';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';


export default function HomeBene() {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className='m-5'>
        <img src='/img/girlshome.png' />
      </div>
      <Separator />
      <div className="flex justify-center mt-5">
        <Link href='/inscricoes'>
          <MyInscriptionsCard />
        </Link>
        <div className='ml-8'></div>
        <Link href='/eventos'>
          <NextEventsCard />
        </Link>
        
      </div>
    </div>
  );
}
