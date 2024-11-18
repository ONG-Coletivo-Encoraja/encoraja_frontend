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
          <div className="flex space-x-8">
            <Label className="text-white"><Link href="/#about-us">Sobre Nós</Link></Label>
            <Label className="text-white"><Link href="/#events">Eventos</Link></Label>
            <Label className="text-white"><Link href="/#partners">Apoiadores e Parceiros</Link></Label>
            <Label className="text-white"><Link href="/transparency">Transparência</Link></Label>
            <Label className="text-white"><Link href="/#contact">Contato</Link></Label>
            <Label className="text-white"><Link href="/#donate">Doe</Link></Label>
          </div>
        </div>
        <div className="flex items-center mr-4">
            <Label className="text-white mx-4"><Link href="/login">Login</Link></Label>
            <Label className="text-white mx-4"><Link href="/register">Cadastre-se</Link></Label>
        </div>
      </Menubar>
    </div>
  );
}
