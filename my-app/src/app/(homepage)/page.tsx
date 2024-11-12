import React from 'react';
import { AboutUsCard } from "@/components/homepage/about-us";
import Navbar from "../../components/homepage/navbar"
import { Label } from "@/components/ui/label";
import { EventsCard } from '@/components/homepage/events';

export default function Home() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen space-y-0">
        <div 
          className="w-full min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/img/homepage1bg.png')" }}
        >
         
         <div className="flex flex-col items-center justify-center text-center h-screen">
            <Label className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 max-w-[80%] font-rosario">
              Nós ajudamos
            </Label>
            <Label className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-peaceSans font-bold max-w-[80%]">
              MULHERES
            </Label>
            <Label className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 max-w-[80%] font-rosario">
              a romperem ciclos de violência e criar oportunidades de geração de renda e inclusão econômica!
            </Label>
          </div>
        </div>

        <div 
          id="about-us" 
          className="w-full min-h-screen bg-no-repeat bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/img/homepage2bg.png')" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            <AboutUsCard
              icon="img/iconencoraja2.png"
              title="Quem somos?"
              content="Um Coletivo de mulheres que atuam no combate à violência doméstica e abuso infantil. Oferecendo cursos que capacitam mulheres visando atingir a independência financeira (como por exemplo: oficinas de costura, pintura, entre outros)." 
            />
            <AboutUsCard
              icon="img/iconmission.png"
              title="Nossa Missão?"
              content="Empoderar mulheres através do acolhimento, capacitação profissional e orientação, promovendo sua autonomia e abrindo caminhos para uma vida digna e independente."
            />
            <AboutUsCard
              icon="img/icondifferential.png"
              title="Diferencial"
              content="Com programas de capacitação focados no desenvolvimento financeiro e profissional, oferecemos suporte personalizado para que cada mulher atinja seus objetivos de independência."
            />
            <AboutUsCard
              icon="img/iconvision.png"
              title="Visão"
              content="Ser uma referência no apoio ao desenvolvimento pessoal e financeiro de mulheres, inspirando e capacitando para que se tornem agentes de transformação em suas comunidades."
            />
            <AboutUsCard
              icon="img/iconvalues.png"
              title="Valores"
              content="Valorizamos o respeito, a diversidade, a ética e a transparência em todas as nossas ações, promovendo um ambiente de acolhimento e seguro. Acreditamos no poder de cada mulher de construir um futuro com mais oportunidades e igualdade" 
            />
          </div>
        </div>


          <div 
            id='fundation'
            className="grid md:grid-cols-3 md:gap-4 h-screen items-center bg-no-repeat bg-cover bg-center md:m-0 md:p-0"
            style={{ backgroundImage: "url('/img/homepage3bg.png')" }}
          >
            <div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-0.5 gap-x-0.5 h-auto py-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
              <Label className="text-[#73225D] md:text-3xl" style={{ fontSize: '3rem', fontFamily: 'Peace Sans', fontWeight: 'bold', maxWidth: '80%' }}>Sobre as fundadoras</Label>
              <Label className="text-[#73225D] md:text-3xl" style={{ fontSize: '2rem', fontFamily: 'Rosario', marginBottom: '1rem', maxWidth: '80%' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsam officia accusamus earum ducimus est cupiditate aperiam itaque molestias tempora animi optio laborum nisi recusandae, cumque ut vitae ratione at.
              </Label>
            </div>
          </div>

        <div 
            id="events"
            className="w-full min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center p-8"
            style={{ backgroundImage: "url('/img/homepage4bg.png')" }}
            >
          <div className="text-center md:mb-8 flex flex-col items-center">
              <Label className="text-[#F2F2F2] text-3xl font-bold" style={{ fontSize: '3rem', fontFamily: 'Peace Sans' }}>
                Projetos que transformam vidas
              </Label>
              <Label className="text-[#F2F2F2] text-xl mt-2 italic" style={{ fontSize: '2rem', fontFamily: 'Peace Sans' }}>
                Conheça nossos projetos e faça parte dessa transformação
              </Label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
              <EventsCard 
                img={<img src="img/events/instituto-ama.jpeg" alt="instituto-ama" />}
                title="Instituto Ama"
                content={<span  className="text-[#F2F2F2]" style={{ fontSize: '1rem', fontFamily: 'Rosario', marginBottom: '1rem', maxWidth: '80%' }}>"22 crianças impactadas!! Esse foi o resultado do projeto realizado junto ao Instituto Ama, onde foram realizadas oficinas de pintura e desenho com as crianças da comunidade."</span>}
              />
              <EventsCard 
                img={<img src="img/events/curso-canva.jpeg" alt="canva-para-mulheres-empreendedoras" />}
                title="Canva para Mulheres empreendedoras"
                content={<span  className="text-[#F2F2F2]" style={{ fontSize: '1rem', fontFamily: 'Rosario', marginBottom: '1rem', maxWidth: '80%' }}>"Projeto realizado em parceria com o Cebrac, com o objetivo de capacitar mulheres empreendedoras a criar suas próprias artes para divulgação de seus produtos e serviços. Foram 15 mulheres impactadas!!"</span>}
              />
              <EventsCard 
                img={<img src="img/events/teatro.jpeg" alt="na-cidade-das-hortensias" />}
                title="Na cidade das Hortênsias"
                content={<span  className="text-[#F2F2F2] style={{ fontSize: '1rem', fontFamily: 'Rosario', marginBottom: '1rem', maxWidth: '80%' }}">"Espetáculo realizado pelo Coletivo Encoraja, com o objetivo de conscientizar a população sobre a violência doméstica e abuso infantil. Foram 5 apresentações realizadas em diferentes teatros em Curitiba, impactando mais de 500 pessoas."</span>}
              />
              <EventsCard 
                img={<img src="img/events/oficina-colagem.jpeg" alt="oficina-de-colagem" />}
                title="Oficina de Colagem"
                content={<span  className="text-[#F2F2F2]" style={{ fontSize: '1rem', fontFamily: 'Rosario', marginBottom: '1rem', maxWidth: '80%' }}>"22 crianças impactadas!! Esse foi o resultado do projeto realizado junto ao Instituto Ama, onde foram realizadas oficinas de pintura e desenho com as crianças da comunidade."</span>}
              />
            </div>
          </div>


          <div 
            id="partners"
            className="w-full min-h-screen flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center p-8"
            style={{ backgroundImage: "url('/img/homepage5bg.png')" }}
          >
            <div className="flex flex-col items-center justify-start pt-12"> 
              <Label className="text-[#F2F2F2] text-3xl font-bold text-center" style={{ fontSize: '2rem', fontFamily: 'Peace Sans', fontWeight: 'bold', marginBottom: '1rem', maxWidth: '80%' }}>Nossos parceiros e apoiadores</Label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
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
            </div>

            <div id="contact" className="text-[#73225D] sm:mt-60 text-3xl">
              <Label className="text-[#73225D] sm:mt-60 text-3xl" style={{ fontSize: '2rem', fontFamily: 'Peace Sans', fontWeight: 'bold', marginBottom: '1rem', maxWidth: '80%' }}>
                Contatos
              </Label>
            </div>
           
          </div>

        </div>
  </>
  );
}
