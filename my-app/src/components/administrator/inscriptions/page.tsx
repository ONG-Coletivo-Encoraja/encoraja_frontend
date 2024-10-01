
import * as React from 'react';

import InscriptionsTable from "@/components/shared/inscriptionsTable";
import FilterInscriptions from "@/components/shared/filterInscriptions";
import SearchComponent from "@/components/shared/search";

export default function Inscriptions() {
    return (
        <>
            <br></br>
            <br></br>
            <h2 className="font-bold leading-none tracking-tight text-[#702054] text-[24px]">Todas as Inscrições</h2>

            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <div> 
                        < FilterInscriptions />
                    </div>
                    <div> 
                        < SearchComponent />
                    </div>
                </div>

                <div className="mt-4"> 
                    < InscriptionsTable />
                </div>

          </div>
        </>
    );
  }
