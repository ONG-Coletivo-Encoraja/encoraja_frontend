import * as React from 'react';
import MyInscriptions from "@/components//volunteer/inscriptions/inscriptionsTable";
import BackgroundImage from '@/components/ui/background-image';

export default function InscriptionsScreen() {
    return (
        <div className="h-screen flex flex-col items-center bg-[#ededed]">
          <div className="mt-12">
            < MyInscriptions />
          </div>
        </div>
    );
  }
