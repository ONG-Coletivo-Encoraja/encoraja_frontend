'use client';

import * as React from "react";
import { UserCard } from "@/components/shared/userCard";
import FilterComponent from "@/components/shared/filter";
import SearchComponent from "@/components/shared/search";
import Link from "next/link";

export function UsersList() {
  return (
    <div>
      <div className="flex justify-end">
        <SearchComponent />
      </div>
      <h1 className="font-bold leading-none tracking-tight text-[#702054] text-[34px]">Todos os usuários</h1>
      <div>
        <FilterComponent/>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
      <Link href="/detalhe-do-evento">
        <UserCard />
      </Link>
      <Link href="/detalhe-do-evento">
        <UserCard />
      </Link>
      <Link href="/detalhe-do-evento">
        <UserCard />
      </Link>
      <Link href="/detalhe-do-evento">
        <UserCard />
      </Link>
      </div>
    </div>
  );
}