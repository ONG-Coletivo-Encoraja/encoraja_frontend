import * as React from 'react';
import Inscriptions from "@/components/administrator/inscriptions/page";
import BackgroundImage from '@/components/ui/background-image';

export default function InscriptionsScreen() {
    return (
        <div>
          <BackgroundImage className="h-full w-full flex items-center justify-center">
            < Inscriptions />
          </BackgroundImage>
        </div>
    );
  }
