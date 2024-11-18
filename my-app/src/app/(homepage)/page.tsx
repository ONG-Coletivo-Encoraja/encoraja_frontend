import React from 'react';
import { AboutUsCard } from "@/components/homepage/about-us";
import Navbar from "../../components/homepage/navbar"
import { Label } from "@/components/ui/label";
import { EventsCard } from '@/components/homepage/events';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
    </head>

    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
    </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen space-y-0">
        <div 
          className="w-full min-h-screen bg-no-repeat bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/img/homepage1bg.png')" }}
        >
         
          <div className="flex flex-col items-start justify-center text-left h-screen">
            <Label className="text-[#F2F2F2] text-2xl sm:text-3xl md:text-3xl lg:text-1xl xl:text-4xl mb-4 max-w-[30%] ">
              Nós ajudamos
            </Label>
            <Label className="text-[#F2F2F2] text-5xl sm:text-6xl md:text-6xl lg:text-4xl xl:text-6xl font-bold max-w-[60%]">
              MULHERES
            </Label>
            <Label className="text-[#F2F2F2] text-2xl sm:text-3xl md:text-3xl lg:text-1xl xl:text-4xl mb-4 max-w-[30%] text-justify">
              a romperem ciclos de violência e criar oportunidades de geração de renda e inclusão econômica!
            </Label>
          </div>

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
             className="grid md:grid-cols-2 w-full min-h-screen bg-no-repeat bg-cover bg-center p-8"
            style={{ backgroundImage: "url('/img/homepage3bg.png')" }}
          >
            <div className="h-auto md::py-20 text-left flex flex-col justify-center" style={{ paddingLeft: "5%" }}>
              <Label className="text-[#73225D] md:text-3xl text-left" style={{ fontSize: "3rem",   fontWeight: "bold", marginBottom: "1rem",}}>
                 Fundadoras
              </Label>
              <Label className="text-[#73225D] sm:text-1.3xl text-justify" style={{ fontSize: "1.3rem",   marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                O Coletivo Encoraja é uma organização social de mulheres, sem fins lucrativos, com o objetivo de promover o enfrentamento ao abuso sexual infantil, violência doméstica e fomentar o empreendedorismo e o empoderamento feminino.
              </Label>
              <Label className="text-[#73225D] sm:text-1.3xl text-justify" style={{ fontSize: "1.3rem",   marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                O Encoraja surgiu com o lançamento do Livro Leda e Lili de Fabiane Prado e Diana Monteiro em 2022.
              </Label>
              <Label className="text-[#73225D] sm:text-1.3xl text-justify" style={{ fontSize: "1.3rem",   marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Em outubro de 2022 surgiu o Coletivo Encoraja formado por 10 mulheres de diferentes áreas do conhecimento, que doam o seu tempo e seu talento para atuar no enfrentamento ao abuso infantil, violência doméstica e o empreendedorismo feminino.
              </Label>
              <Label className="text-[#73225D] sm:text-1.3xl text-justify" style={{ fontSize: "1.3rem",   marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Trabalhamos por meio de atividades artísticas culturais como contação de histórias, espetáculos teatrais e cursos profissionalizantes.
              </Label>
              <Label className="text-[#73225D] sm:text-1.3xl text-justify" style={{ fontSize: "1.3rem",   marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Iniciamos nossos projetos por meio do aporte do Fundo Elas e até o momento, já apresentamos 14 contações de histórias da Leda e Lili, 05 apresentações do espetáculo Na Cidade das Hortênsias que também é baseado no livro Leda e Lili, desenvolvemos 09 oficinas para mulheres voltada para criação e elaboração de quadros, com intuito de possibilitar uma nova fonte de renda às mulheres e tivemos nosso primeiro curso profissionalizante, Canva para Mulheres Empreendedoras.
              </Label>
              <Label className="text-[#73225D] sm:text-1.3xl text-justify" style={{ fontSize: "1.3rem",   marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Com os nosso projetos em movimento, conseguimos impactar 1.000 pessoas de forma direta, 3.500 de modo indireto, sendo 75% das pessoas impactadas mulheres e meninas em situação de vulnerabilidade social.
              </Label>
              <Label className="text-[#73225D] sm:text-1.3xl text-justify" style={{ fontSize: "1.3rem",   marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Buscamos trabalhar na parte preventiva ao abuso e a violência doméstica porque é o ponto em que o Brasil mais falha. No que tange a ações preventivas, o Brasil possui uma grande escassez perdendo até para países menos desenvolvidos como Quênia e Turquia.
              </Label>
              <Label className="text-[#73225D] sm:text-1.3xl text-justify" style={{ fontSize: "1.3rem",   marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
              Por isso, ao trabalhar na prevenção buscamos resguardar nossas crianças e proporcionar as mulheres uma independência financeira e socioemocional, para que ela possua mais força para sair do ciclo repetitivo de violência.
              </Label>
            </div>

            <div 
              className="h-auto md:py-10 flex flex-col justify-center items-center" 
              style={{ paddingRight: "5%" }}
            >
              <img 
                src="/img/lili-leda.png" 
                className="max-w-full sm:max-h-[2000px] object-contain"
                alt="Leda e Lili é um conto para a conscientização sobre o abuso infantil. Escrito por Diana Monteiro e Fabiane Prado. Ilustração de Renata Ramos."
               />
              </div>
            </div>
            
          <div 
            id="events"
            className="w-full min-h-screen flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center md:p-8"
            style={{ backgroundImage: "url('/img/homepage4bg.png')" }}
          >
            <div className="text-center md:mb-8 flex flex-col items-center">
              <Label className="text-[#F2F2F2] text-3xl font-bold" style={{ fontSize: '3rem'}}>
                Projetos que transformam vidas
              </Label>
              <Label className="text-[#F2F2F2] text-xl mt-2 italic" style={{ fontSize: '2rem'}}>
                Conheça nossos projetos e faça parte dessa transformação
              </Label>
          </div>

          <div className="grid sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
              <EventsCard 
                img={<img src="img/events/instituto-ama.jpeg" alt="instituto-ama" />}
                title="Instituto Ama"
                content={<span  className="text-[#F2F2F2]" style={{ fontSize: '1rem',   marginBottom: '1rem', maxWidth: '80%' }}>"22 crianças impactadas!! Esse foi o resultado do projeto realizado junto ao Instituto Ama, onde foram realizadas oficinas de pintura e desenho com as crianças da comunidade."</span>}
              />
              <EventsCard 
                img={<img src="img/events/curso-canva.jpeg" alt="canva-para-mulheres-empreendedoras" />}
                title="Canva para Mulheres empreendedoras"
                content={<span  className="text-[#F2F2F2]" style={{ fontSize: '1rem',   marginBottom: '1rem', maxWidth: '80%' }}>"Projeto realizado em parceria com o Cebrac, com o objetivo de capacitar mulheres empreendedoras a criar suas próprias artes para divulgação de seus produtos e serviços. Foram 15 mulheres impactadas!!"</span>}
              />
              <EventsCard 
                img={<img src="img/events/teatro.jpeg" alt="na-cidade-das-hortensias" />}
                title="Na cidade das Hortênsias"
                content={<span  className="text-[#F2F2F2] style={{ fontSize: '1rem',   marginBottom: '1rem', maxWidth: '80%' }}">"Espetáculo realizado pelo Coletivo Encoraja, com o objetivo de conscientizar a população sobre a violência doméstica e abuso infantil. Foram 5 apresentações realizadas em diferentes teatros em Curitiba, impactando mais de 500 pessoas."</span>}
              />
              <EventsCard 
                img={<img src="img/events/oficina-colagem.jpeg" alt="oficina-de-colagem" />}
                title="Oficina de Colagem"
                content={<span  className="text-[#F2F2F2]" style={{ fontSize: '1rem',   marginBottom: '1rem', maxWidth: '80%' }}>"22 crianças impactadas!! Esse foi o resultado do projeto realizado junto ao Instituto Ama, onde foram realizadas oficinas de pintura e desenho com as crianças da comunidade."</span>}
              />
            </div>

          </div>
            


          <div 
            id="donate"
            className="w-full min-h-screen flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center md:p-8"
            style={{ backgroundImage: "url('/img/homepage5bg.png')" }}
          >
            <div className="flex flex-col items-start justify-center text-left h-screen">
            <Label className="text-[#F2F2F2] text-6xl sm:text-7xl md:text-7xl lg:text-5xl xl:text-7xl font-bold max-w-[60%]">
            Saiba como financiar nossos projetos
            </Label>
            <Label className="text-[#F2F2F2] text-2xl sm:text-3xl md:text-3xl lg:text-1xl xl:text-4xl mb-4 max-w-[60%] text-justify">
            Doe
            </Label>
            <Label className="text-[#F2F2F2] text-2xl sm:text-3xl md:text-3xl lg:text-1xl xl:text-4xl mb-4 max-w-[60%] text-justify">
            PIX: 48.755.418/0001-35
            </Label>
          </div>
          </div>


          <div 
            id="partners"
            className="w-full min-h-screen flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center md:p-8"
            style={{ backgroundImage: "url('/img/homepage6bg.png')" }}
          >
            <div className="flex flex-col items-center justify-start md:pt-12"> 
              <Label className="text-[#F2F2F2] text-3xl font-bold text-center" style={{ fontSize: '2rem',   fontWeight: 'bold', marginBottom: '1rem', maxWidth: '80%' }}>Nossos parceiros e apoiadores</Label>
              
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

            <div
              id="contact"
              className="text-[#BF6550] sm:mt-60 text-3xl flex flex-col items-center justify-center h-[200px]"
            >
              <Label
                className="text-[#BF6550] text-3xl"
                style={{
                  fontSize: '2rem',
                   
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  maxWidth: '100%',
                  textAlign: 'center',
                }}
              >
                Contatos
              </Label>

              <div className="sm:mt-4 flex justify-center items-center sm:space-x-6 font-rosario">
                <a
                  href="https://www.instagram.com/coletivo_encoraja/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img loading="lazy" src="https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white"></img>
                </a>
                <a
                  href="mailto:contato@institutoencoraja.org"
                  className="text-[#73225D] text-xl font-rosario"
                >
                  <img loading="lazy" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></img>
                </a>
                <a
                href="https://www.google.com/maps?q=Rua+Tibagi,+99+-+Centro,+Curitiba+-+PR,+Brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#73225D] text-xl underline"
              >
                <img loading="lazy" src="https://img.shields.io/badge/Google%20Maps-E1306C?style=for-the-badge&logo=googlemaps&logoColor=white"></img>
              </a>
              </div>
            </div>
    </div>
  </>
  );
}
