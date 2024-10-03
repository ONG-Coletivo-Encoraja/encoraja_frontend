'use client';

import AccordionComplaince from '@/components/administrator/complaince';
import * as React from 'react';

export default function ComplaincePage() {

  return (
    <>
      <div className='flex flex-col items-center w-full bg-[#EDEDED] h-[88vh]'>
        <a className='text-lg font-bold p-3'>Denúncias</a>
        <AccordionComplaince />
      </div>
    </>
  );
}
