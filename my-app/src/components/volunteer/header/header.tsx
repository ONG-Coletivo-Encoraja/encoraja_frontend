'use client';

import React, { useState } from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@/components/ui/menubar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { LogoutDialog } from './logoutDialog';

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLogoutDialog = () => {
    setIsLogoutDialogOpen(true);
  };

  const handleCloseLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };

  return (
    <div className="flex flex-col">
      <Menubar className="bg-[#702054] h-[65px] flex justify-between items-center">
        <img
          src="/img/mini-logo.png"
          alt="Logo"
          className="h-12 ml-4"
        />
        <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
          <div className='flex items-center mr-8 border rounded-md'>
            <DropdownMenuTrigger asChild>
              <Label className="text-white mx-4 flex items-center justify-between">
                {status === 'loading' ? 'Carregando...' : session?.user?.name || 'Usuário'} 
                {isOpen ? (
                  <ChevronUp color="#ffffff" />
                ) : (
                  <ChevronDown color="#ffffff" />
                )}
              </Label>
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/meu-perfil">
                  <span>Meu Perfil</span>
                </Link>
              </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleOpenLogoutDialog}>
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Menubar>
      <LogoutDialog isOpen={isLogoutDialogOpen} onClose={handleCloseLogoutDialog} />
    </div>
  );
}
