'use client'

import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import CircularProgress from '@mui/material/CircularProgress';

interface ICompliance {
    name: string
    email: string
    phone_number: string
    description: string
    relation: string
    motivation: string
    ip_address: string
    browser: string
    created_at: Date
}

interface ComplianceAccordionProps {
    compliance: ICompliance
}

export function AccordionComplaince({compliance}: ComplianceAccordionProps ) {
    return (
        <>
            <Accordion type="single" collapsible className='flex justify-center bg-white p-5 rounded-lg w-[50vw]'>
                <AccordionItem value="item-1" >
                    <AccordionTrigger className='font-bold w-[48vw] text-base'>Não gostei do atendimento!</AccordionTrigger>
                    <AccordionContent className='sm:max-w-[900px] flex flex-col gap-5'>
                        <div className='flex justify-between w-10/12'>
                            <div>
                                <p className='font-bold'>Nome: {compliance.name}</p>
                            </div>
                            <div>
                                <p className='font-bold'>Email: {compliance.email}</p>
                            </div>
                            <div>
                                <p className='font-bold'>Telefone: {compliance.phone_number}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold'>Descrição:</h1>
                            <p>{compliance.description}</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>Relação com a ong:</h1>
                            <p>{compliance.relation}</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>Motivação:</h1>
                            <p>{compliance.motivation}</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
}

export default AccordionComplaince;