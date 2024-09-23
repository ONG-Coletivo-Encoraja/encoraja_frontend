'use client';

import BackgroundImage from '@/components/ui/background-image';
import { EventsList } from '@/components/beneficiary/events/eventsList';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import StarRating from '@/components/ui/rating';
import { Button } from '@/components/ui/button';

export default function Events() {
  return (
    <BackgroundImage className="h-full w-full flex items-center justify-center">
    <Button className="mb-5">Voltar</Button>
    <Card className="w-[1200px] h-[600px] flex">
    <div>
      <CardHeader>
        <CardDescription className =" text-[#F69053]">Próximos eventos</CardDescription>
        <CardTitle>Curso de costura</CardTitle>
        <ul className="flex space-x-4">
          <li><Badge variant={'secondary'}>14H</Badge></li>
          <li><Badge>14H</Badge></li>
          <li><Badge>14H</Badge></li>
          <li><Badge variant={'tertiary'}>14H</Badge></li>
          <li><Badge className=" h-[50px] rounded-[25%] " variant={'quaternary'}>14/07</Badge></li>
        </ul>
        <Label className=" text-[#727272]">Responsável: Juliana Baiçar</Label>
      </CardHeader>
      <CardContent>
      <Separator />
      <Label className=" text-[#727272]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt praesentium laborum illum voluptates. </Label>
      <div className='mt-5 flex flex-col items-start space-y-3'>
        <Label>Local onde ocorrerá o evento: R. exemplo 1 Nº 810, Centro</Label>
        <Label>Materiais necessários: Tesoura</Label>
        <Label>Valor do curso: R$ 10,00</Label>
      </div>
      </CardContent>
    </div>
    <div>
    <CardHeader>
        <div className='flex justify-between'>
            <CardTitle>Avaliações</CardTitle>
            <StarRating />
        </div>
        <Label className=" text-[#727272]">Responsável: Juliana Baiçar</Label>
      </CardHeader>
    </div>
      <CardFooter className="flex justify-end">
        <StarRating />
      </CardFooter>
    </Card>

    </BackgroundImage>
  );
};
