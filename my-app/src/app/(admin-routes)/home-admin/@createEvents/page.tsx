// page.tsx
'use client'; // Adicione esta linha para garantir que o código seja executado no lado do cliente

import * as React from 'react';
//import Navbar from '../../../../components/home-admin/navbar';
//import Sidebar from '../../../../components/home-admin/sidebar';
import EventsForm from '@/components/home-admin/contents/eventsForm';

export default function Home() {
  /*
    const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <EventsForm drawerOpen={open} />
  */
  return (
    <>
      <EventsForm />
    </>
  );
}