import * as React from 'react';
import { Profile } from '@/components/administrator/profile/profile';
import BackgroundImage from '@/components/ui/background-image';

export default function ProfilePage() {

  return (
    <div className="h-screen">
      <BackgroundImage className="h-full w-full flex items-center justify-center">
        <Profile />
      </BackgroundImage>
    </div>
  );
}