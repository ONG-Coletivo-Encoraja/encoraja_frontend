import React from 'react';
import MyInscriptions from '@/components/shared/myInscriptionsTable';

export default function InscriptionsScreen() {
    return (
      <div className="h-screen flex flex-col items-center bg-[#ededed]">
      <div className="mt-12">
        <MyInscriptions />
      </div>
    </div>
    );
  }