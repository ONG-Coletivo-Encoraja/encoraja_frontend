'use client';

import * as React from 'react';
import Navbar from '../../../components/home-admin/navbar';
import Sidebar from '../../../components/home-admin/sidebar';

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
    </>
  );
}