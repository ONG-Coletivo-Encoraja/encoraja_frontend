'use client';

import * as React from 'react';
import Link from 'next/link';
import { DefaultCard } from '@/components/administrator/home/defaultcard';
import { NextEventsCard } from '@/components/administrator/home/nexteventscard';
import { Separator } from '@/components/ui/separator';

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className='m-5'>
        <img src='/img/girlshome.png' />
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-1 justify-center mt-5">
        <Link href='/accept-volunteers'>
          <DefaultCard />
        </Link>
        <Link href='/all-events'>
          <NextEventsCard />
        </Link>
        <Link href='/all-inscriptions'>
          <DefaultCard />
        </Link>
      </div>
    </div>
  );
}
