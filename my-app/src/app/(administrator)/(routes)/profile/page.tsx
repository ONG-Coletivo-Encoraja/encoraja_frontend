import React from 'react';
import { Profile } from '@/components/administrator/profile/profile';

export default function ProfilePage() {

  return (
    <div className="h-screen" style={{
      backgroundImage: "url('/img/backgroundgirls.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="h-full w-full flex items-center justify-center">
        <Profile />
      </div>
    </div>
  );
}