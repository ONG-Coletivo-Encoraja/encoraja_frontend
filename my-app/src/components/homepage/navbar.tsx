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
            <Link href="/#about-us">
              <Label className="text-white">Sobre Nós</Label>
            </Link>
            <Link href="/#events">
            <Label className="text-white">Eventos</Label>
            </Link>
            <Link href="/#partners">
            <Label className="text-white">Apoiadores e Parceiros</Label>
            </Link>
            <Link href="/transparency">
            <Label className="text-white">Transparência</Label>
            </Link>
            <Link href="/#contact">
            <Label className="text-white">Contato</Label>
            </Link>
            <Link href="/#donate">
            <Label className="text-white">Doe</Label>
            </Link>
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
