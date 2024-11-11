import React from 'react';
import { AboutUsCard } from "@/components/homepage/about-us";
import Navbar from "../../components/homepage/navbar"
import { Label } from "@/components/ui/label";
import { EventsCard } from '@/components/homepage/events';

export default function Home() {
  return (
    <>
  <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen space-y-0">
        <div 
          className="grid grid-cols-3 gap-4 h-screen items-center bg-no-repeat bg-cover bg-center m-0 p-0"
          style={{ backgroundImage: "url('/img/homepage1bg.png')" }}
        >
         
          <div className="text-white font-bold text-5xl text-center max-w-[80%]">
              <p>NÓS AJUDAMOS</p>
              <h1>MULHERES</h1> 
              <p>a romperem ciclos de violência e criar oportunidades de geração de renda e inclusão econômica!</p>
          </div>
        
        </div>

        <div 
          id="about-us" 
          className="grid grid-cols-3 gap-4 h-screen items-center bg-no-repeat bg-cover bg-center m-0 p-0"
          style={{ backgroundImage: "url('/img/homepage2bg.png')" }}
        >

          <div id='about-us' className="grid grid-cols-3 gap-4 h-screen flex items-center">
            <AboutUsCard
            title="Quem somos?"
            content="Um Coletivo de mulheres que atuam no combate à violência doméstica e abuso infantil. Oferecendo cursos que capacitam mulheres visando atingir a independência financeira (como por exemplo: oficinas de costura, pintura, entre outros)." 
            />
            <AboutUsCard
            title="Nossa Missão?"
            content="Empoderar mulheres através do acolhimento, capacitação profissional e orientação, promovendo sua autonomia e abrindo caminhos para uma vida digna e independente."
            />
            <AboutUsCard
            title="Diferencial"
            content="Com programas de capacitação focados no desenvolvimento financeiro e profissional, oferecemos suporte personalizado para que cada mulher atinja seus objetivos de independência."
            />
            <AboutUsCard
            title="Visão"
            content="Ser uma referência no apoio ao desenvolvimento pessoal e financeiro de mulheres, inspirando e capacitando para que se tornem agentes de transformação em suas comunidades."
            />
            <AboutUsCard
            title="Valores"
            content="Valorizamos o respeito, a diversidade, a ética e a transparência em todas as nossas ações, promovendo um ambiente de de acolhimento e seguro. Acreditamos no poder de cada mulher de construir um futuro com mais oportunidades e igualdade" 
            />
          </div>

        </div>


          <div 
            id='fundation'
            className="grid grid-cols-3 gap-4 h-screen items-center bg-no-repeat bg-cover bg-center m-0 p-0"
            style={{ backgroundImage: "url('/img/homepage3bg.png')" }}
          >
            <div>
            </div>
            <div>
              <Label className="text-[#73225D] text-4xl mb-4 text-center">Sobre as fundadoras</Label>
              <Label className="text-[#73225D] text-sm text-justify max-w-[80%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsam officia accusamus earum ducimus est cupiditate aperiam itaque molestias tempora animi optio laborum nisi recusandae, cumque ut vitae ratione at.
              </Label>
            </div>
          </div>

          <div 
            id="events"
            className="w-full min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center p-8"
            style={{ backgroundImage: "url('/img/homepage4bg.png')" }}
          >
            {/* Título da seção de eventos */}
            <div className="text-center mb-8">
              <Label className="text-3xl">Projetos que transformam vidas</Label>
              <Label className="text-xl mt-2">Conheça nossos projetos e faça parte dessa transformação</Label>
            </div>

            {/* Cards de eventos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
              <EventsCard 
                img={<img src="img/events/instituto-ama.jpeg" alt="instituto-ama" />}
                title="Instituto Ama"
                content="22 crianças impactadas!! Esse foi o resultado do projeto realizado junto ao Instituto Ama, onde foram realizadas oficinas de pintura e desenho com as crianças da comunidade."
              />
              <EventsCard 
                img={<img src="img/events/curso-canva.jpeg" alt="canva-para-mulheres-empreendedoras" />}
                title="Canva para Mulheres empreendedoras"
                content="Projeto realizado em parceria com o Cebrac, com o objetivo de capacitar mulheres empreendedoras a criar suas próprias artes para divulgação de seus produtos e serviços. Foram 15 mulheres impactadas!!"
              />
              <EventsCard 
                img={<img src="img/events/teatro.jpeg" alt="na-cidade-das-hortensias" />}
                title="Na cidade das Hortênsias"
                content="Espetáculo realizado pelo Coletivo Encoraja, com o objetivo de conscientizar a população sobre a violência doméstica e abuso infantil. Foram 5 apresentações realizadas em diferentes teatros em Curitiba, impactando mais de 500 pessoas."
              />
              <EventsCard 
                img={<img src="img/events/oficina-colagem.jpeg" alt="oficina-de-colagem" />}
                title="Oficina de Colagem"
                content="22 crianças impactadas!! Esse foi o resultado do projeto realizado junto ao Instituto Ama, onde foram realizadas oficinas de pintura e desenho com as crianças da comunidade."
              />
            </div>
          </div>

          <div 
            id='partners'
            className="w-full min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center p-8"
            style={{ backgroundImage: "url('/img/homepage5bg.png')" }}
          >
            <div className='flex flex-col items-center justify-center'>
              <Label className="text-3xl">Nossos parceiros e apoiadores</Label>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
              <img 
                src="img/partners/luar-da-baronesa.png" 
                className="max-w-full max-h-[150px] object-contain"
                alt="Luar da Baronesa"
              />
              <img 
                src="img/partners/cebrac.png" 
                className="max-w-full max-h-[150px] object-contain"
                alt="Cebrac"
              />
              <img 
                src="img/partners/elas-ong.png" 
                className="max-w-full max-h-[150px] object-contain"
                alt="Elas"
              />
              <img 
                src="img/partners/mulheres-em-movimento.png" 
                className="max-w-full max-h-[150px] object-contain"
                alt="Mulheres em movimento"
              />
            </div>
            <Label className='m-8 text-3xl'>Contatos</Label>
          </div>  
      </div>
  </>
  );
}
