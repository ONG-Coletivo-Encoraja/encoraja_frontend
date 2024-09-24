'use client';

import * as React from "react";
import { EventCard } from "@/components/shared/eventCard";
import FilterComponent from "@/components/shared/filter";
import SearchComponent from "@/components/shared/search";

export function EventsList() {
  return (
    <div className="m-10">
      <div className="pt-60 flex justify-end">
        <SearchComponent />
      </div>
      <h1 className="font-bold leading-none tracking-tight text-[#702054] text-[34px]">Eventos cadastrados</h1>
      <div>
        <FilterComponent/>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}