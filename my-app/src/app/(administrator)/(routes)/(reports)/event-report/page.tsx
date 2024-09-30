'use client';

import ReportAdmin from '@/components/administrator/report/table';
import * as React from 'react';

export default function EventReport() {

  return (
    <>
      <div className='flex flex-col items-center w-full bg-[#EDEDED] h-[88vh]'>
        <ReportAdmin/>
      </div>
    </>
  );
}
