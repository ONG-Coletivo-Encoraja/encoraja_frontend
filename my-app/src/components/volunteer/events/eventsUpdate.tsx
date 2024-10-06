import * as React from 'react';
import Events from "@/components/shared/eventUpdate";
import BackgroundImage from '@/components/ui/background-image';

export default function EventUpdate() {

  return (
    <>
    {/* Adicionar total de inscritos e restrigir alterações de acordo com o acesso */}
      <BackgroundImage className="h-full w-full flex items-center justify-center">
      < Events />
      </BackgroundImage>
    </>
  );
}