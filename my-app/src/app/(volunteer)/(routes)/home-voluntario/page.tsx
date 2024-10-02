import * as React from 'react';
import Link from 'next/link';
import { DefaultCard } from '@/components/volunteer/home/defaultcard';
import { NextEventsCard } from '@/components/volunteer/home/nexteventscard';
import { Separator } from '@/components/ui/separator';

export default function Home() {

  return (
    <>
    <div className="flex flex-col items-center justify-center bg-[#ededed]">
      <div className='m-5'>
        <img src='/img/girlshome.png' />
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-1 justify-center mt-5">
        <Link href='/inscricoes'>
          <DefaultCard />
        </Link>
        <Link href='/eventos'>
          <NextEventsCard />
        </Link>
      </div>
    </div>
    </>
  );
}
