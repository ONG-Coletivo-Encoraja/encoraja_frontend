import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const imagens: string[] = [
  "/img/girlshome.png",
  "/img/uniao-das-mulheres.png", 
  "/img/backgroundgirls.png", 
]

export function CarouselHomePage() {
  return (
    <Carousel className="h-[750px] w-[90wv]">
      <CarouselContent>
        {imagens.map((imagem, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="h-[700px] flex items-center justify-center p-6">
                <img
                    src={imagem}
                    alt={`Imagem ${index + 1}`}
                    className="w-full h-full object-cover" 
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
