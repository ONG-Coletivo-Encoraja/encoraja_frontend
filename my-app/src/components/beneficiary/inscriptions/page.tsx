import * as React from 'react';

import MyInscriptionsTable from "@/components/shared/myInscriptionsTable";
import FilterInscriptions from "@/components/shared/filterInscriptions";
import SearchComponent from "@/components/shared/search";

export default function MyInscriptions() {
    return (
        <>
            <br></br>
            <br></br>
            <h2 className="font-bold leading-none tracking-tight text-[#702054] text-[24px]">Minhas Inscrições</h2>

            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <div> 
                        < FilterInscriptions />
                    </div>
                    <div> 
                       {/* < SearchComponent /> */}
                    </div>
                </div>

                <div className="mt-4"> 
                    < MyInscriptionsTable />
                </div>

          </div>
        </>
    );
  }
