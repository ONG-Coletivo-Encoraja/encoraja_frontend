'use client';

import * as React from "react";
import { EventCard } from "@/components/shared/eventCard";
import FilterComponent from "@/components/shared/filter";

export function EventsList() {
  return (
  <>
    <h1 className="font-bold leading-none tracking-tight text-[#702054] text-[34px]">Eventos cadastrados</h1>
    <br></br>
    <div className="grid grid-cols-3 gap-4">
    <div><EventCard /></div>
    <div><EventCard /></div>
    <div><EventCard /></div>
    <div><EventCard /></div>
    </div>
  </>
  );
}
