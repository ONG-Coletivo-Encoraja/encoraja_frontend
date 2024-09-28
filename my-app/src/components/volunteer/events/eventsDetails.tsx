'use client';

import { useRouter } from 'next/navigation'; 
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import StarRating from '@/components/ui/rating';
import { Button } from '@/components/ui/button';
import ReviewUser from './reviewUser';
import DialogReview from './dialogReview';

export default function EventsDetails() {
  const router = useRouter(); 

  return (
    <div>
      <Button onClick={() => router.back()} className="mb-5">Voltar</Button>
      <Card className="w-[1000px] h-[600px] flex">
        <div className='m-5 w-[900px]'>
          <CardHeader>
            <CardDescription className="text-[#F69053]">Próximos eventos</CardDescription>
            <CardTitle>Curso de costura</CardTitle>
            <ul className="flex space-x-4">
              <li><Badge variant={'secondary'}>14:00</Badge></li>
              <li><Badge>Presencial</Badge></li>
              <li><Badge>Oficina</Badge></li>
              <li><Badge variant={'red'}>Finalizado</Badge></li>
              <li><Badge className="h-[50px] rounded-[25%]" variant={'quaternary'}>14/07</Badge></li>
            </ul>
            <Label className="text-[#727272]">Responsável: Juliana Baiçar</Label>
          </CardHeader>
          <CardContent>
            <Separator />
            <br />
            <Label className="text-[#727272]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt praesentium laborum illum voluptates.</Label>
            <div className='mt-5 flex flex-col items-start space-y-3'>
              <Label>Local do evento: R. exemplo 1 Nº 810, Centro</Label>
              <Label>Materiais necessários: Tesoura</Label>
              <Label>Valor do curso: R$ 10,00</Label>
            </div>
            <Button className="mt-5" variant={'terciary'}>Inscritos</Button>
            <div className='flex justify-center mt-[70px]'>
              <Button className="mt-5">Relatório</Button>
            </div>
            
          </CardContent>
        </div>
        <div className="flex items-center">
          <div className="border-l border-[#DCDCDC] h-[550px] mx-4"></div>
        </div>
        <div className='m-5'>
          <CardHeader className='w-[400px]'>
            <div className='flex justify-between'>
              <CardTitle>Avaliações</CardTitle>
              <StarRating />
            </div>
          </CardHeader>
          <CardContent className='h-[400px] flex items-center'>
            <div className='flex flex-col gap-4'>
              <DialogReview />
              <DialogReview />
              <DialogReview />
            </div>

          </CardContent>
          <Separator />
          <CardFooter className='m-6 justify-center'>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
