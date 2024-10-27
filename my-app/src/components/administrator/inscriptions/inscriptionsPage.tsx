'use client';

import React, { useState } from 'react';
import InscriptionsTable from "@/components/administrator/inscriptions/inscriptionsTable";
import FilterInscriptions from "@/components/shared/filterInscriptions";

export default function Inscriptions() {
    const [filterStatus, setFilterStatus] = useState<string>(""); 

    return (
        <>
            <br />
            <h2 className="font-bold leading-none tracking-tight text-[#702054] text-[24px]">Todas as Inscrições</h2>

            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <div> 
                        <FilterInscriptions onFilterChange={setFilterStatus} />
                    </div>
                    <div> 
                        {/* <SearchComponent /> */}
                    </div>
                </div>

                <div className="mt-4"> 
                    <InscriptionsTable filterStatus={filterStatus} />
                </div>
            </div>
        </>
    );
}