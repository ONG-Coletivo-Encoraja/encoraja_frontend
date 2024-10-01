import * as React from 'react';
import MyInscriptions from "@/components/volunteer/inscriptions/page";
import BackgroundImage from '@/components/ui/background-image';

export default function InscriptionsScreen() {
    return (
        <div>
          <BackgroundImage className="h-full w-full flex items-center justify-center">
            < MyInscriptions />
          </BackgroundImage>
        </div>
    );
  }
