'use client';

import ImgWoman from '@/components/home/img-woman';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardInscriptions from '@/components/home-beneficiary/card-inscriptions';

export default function Home() {

  return (
    <>
      <div className='p-2 flex flex-col gap-5'>
        <ImgWoman></ImgWoman>
        <CardInscriptions></CardInscriptions>
      </div>
    </>
  );
}
