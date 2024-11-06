import React from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@/components/ui/menubar';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <Menubar className="bg-[#702054] h-[65px] flex justify-between items-center">
        <img
          src="/img/mini-logo.png"
          alt="Logo"
          className="h-12 ml-4"
        />
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-6">
            <Label className="text-white">Sobre Nós</Label>
            <Label className="text-white">Eventos</Label>
            <Label className="text-white">Apoiadores e Parceiros</Label>
            <Label className="text-white">Transparência</Label>
            <Label className="text-white">Contato</Label>
          </div>
        </div>
        <div className="flex items-center mr-4">
          <Link href="/login">
            <Label className="text-white mx-4">Login</Label>
          </Link>
          <Link href="/register">
            <Label className="text-white mx-4">Cadastre-se</Label>
          </Link>
        </div>
      </Menubar>
    </div>
  );
}
