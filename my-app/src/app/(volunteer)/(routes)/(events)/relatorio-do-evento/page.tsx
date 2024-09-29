
import React from 'react';
import BackgroundImage from '@/components/ui/background-image';
import ReportEvent from '@/components/volunteer/events/reportEventForm';

export default function Events() {
  return (
    
    <div className="h-screen">
        <BackgroundImage className="h-full w-full flex items-center justify-center">
            <ReportEvent />
        </BackgroundImage>
    </div>
  );
};
