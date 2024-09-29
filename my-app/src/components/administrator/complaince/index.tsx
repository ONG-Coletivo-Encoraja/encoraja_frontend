
import * as React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionComplaince = () => {
    return (
        <>
            <Accordion type="single" collapsible className='flex justify-center bg-white p-5 rounded-lg w-[50vw]'>
                <AccordionItem value="item-1" >
                    <AccordionTrigger className='font-bold w-[48vw] text-base'>Não gostei do atendimento!</AccordionTrigger>
                    <AccordionContent className='sm:max-w-[900px] flex flex-col gap-5'>
                        <div className='flex justify-between w-10/12'>
                            <div>
                                <p className='font-bold'>Nome:</p>
                            </div>
                            <div>
                                <p className='font-bold'>Email:</p>
                            </div>
                            <div>
                                <p className='font-bold'>Telefone:</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold'>Descrição:</h1>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>Relação com a ong:</h1>
                            <p>antiga voluntária</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>Motivação:</h1>
                            <p>Não conseguia ter autonomia e negavam todas as minhas propósta de eventos</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
}

export default AccordionComplaince;