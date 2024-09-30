'use client';

import * as React from 'react';
import { UsersList } from "@/components/administrator/users/usersList";
import BackgroundImage from '@/components/ui/background-image';

export default function Events() {

  return (
    <div className="h-screen">
      <BackgroundImage className="h-full w-full flex items-center justify-center">
        
        <UsersList />
      </BackgroundImage>
    </div>
  );
}