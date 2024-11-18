import React from 'react';
import { AboutUsCard } from "@/components/homepage/about-us";
import Navbar from "../../components/homepage/navbar"
import { Label } from "@/components/ui/label";
// import EventsSection from '@/components/homepage/events';

export default function Home() {
  return (
    <>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
    </head>
    <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
    </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen space-y-0">
        <div 
          className="w-full min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center p-8"
          style={{ backgroundImage: "url('/img/homepage1bg.png')" }}
        >
         
          <div className="flex flex-col items-start justify-center text-left h-screen">
            <Label className="text-[#F2F2F2] text-2xl sm:text-3xl md:text-3xl lg:text-1xl xl:text-4xl mb-4 max-w-[60%] font-rosario">
              Nós ajudamos
            </Label>
            <Label className="text-[#F2F2F2] text-6xl sm:text-7xl md:text-7xl lg:text-5xl xl:text-7xl font-peaceSans font-bold max-w-[60%]">
              MULHERES
            </Label>
            <Label className="text-[#F2F2F2] text-2xl sm:text-3xl md:text-3xl lg:text-1xl xl:text-4xl mb-4 max-w-[60%] font-rosario text-justify">
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
            className="grid md:grid-cols-2 md:gap-4 h-screen items-center bg-no-repeat bg-cover bg-center md:m-0 md:p-0"
            style={{ backgroundImage: "url('/img/homepage3bg.png')" }}
          >
            <div className="h-auto sm:py-10 text-left flex flex-col justify-center" style={{ paddingLeft: "5%" }}>
              <Label className="text-[#73225D] md:text-3xl text-left" style={{ fontSize: "3rem", fontFamily: "Peace Sans", fontWeight: "bold", marginBottom: "1rem",}}>
                 Fundadoras
              </Label>
              <Label className="text-[#73225D] md:text-1.3xl text-justify" style={{ fontSize: "1.3rem", fontFamily: "Rosario", marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                O Coletivo Encoraja é uma organização social de mulheres, sem fins lucrativos, com o objetivo de promover o enfrentamento ao abuso sexual infantil, violência doméstica e fomentar o empreendedorismo e o empoderamento feminino.
              </Label>
              <Label className="text-[#73225D] md:text-1.3xl text-justify" style={{ fontSize: "1.3rem", fontFamily: "Rosario", marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                O Encoraja surgiu com o lançamento do Livro Leda e Lili de Fabiane Prado e Diana Monteiro em 2022.
              </Label>
              <Label className="text-[#73225D] md:text-1.3xl text-justify" style={{ fontSize: "1.3rem", fontFamily: "Rosario", marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Em outubro de 2022 surgiu o Coletivo Encoraja formado por 10 mulheres de diferentes áreas do conhecimento, que doam o seu tempo e seu talento para atuar no enfrentamento ao abuso infantil, violência doméstica e o empreendedorismo feminino.
              </Label>
              <Label className="text-[#73225D] md:text-1.3xl text-justify" style={{ fontSize: "1.3rem", fontFamily: "Rosario", marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Trabalhamos por meio de atividades artísticas culturais como contação de histórias, espetáculos teatrais e cursos profissionalizantes.
              </Label>
              <Label className="text-[#73225D] md:text-1.3xl text-justify" style={{ fontSize: "1.3rem", fontFamily: "Rosario", marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Iniciamos nossos projetos por meio do aporte do Fundo Elas e até o momento, já apresentamos 14 contações de histórias da Leda e Lili, 05 apresentações do espetáculo Na Cidade das Hortênsias que também é baseado no livro Leda e Lili, desenvolvemos 09 oficinas para mulheres voltada para criação e elaboração de quadros, com intuito de possibilitar uma nova fonte de renda às mulheres e tivemos nosso primeiro curso profissionalizante, Canva para Mulheres Empreendedoras.
              </Label>
              <Label className="text-[#73225D] md:text-1.3xl text-justify" style={{ fontSize: "1.3rem", fontFamily: "Rosario", marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Com os nosso projetos em movimento, conseguimos impactar 1.000 pessoas de forma direta, 3.500 de modo indireto, sendo 75% das pessoas impactadas mulheres e meninas em situação de vulnerabilidade social.
              </Label>
              <Label className="text-[#73225D] md:text-1.3xl text-justify" style={{ fontSize: "1.3rem", fontFamily: "Rosario", marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
                Buscamos trabalhar na parte preventiva ao abuso e a violência doméstica porque é o ponto em que o Brasil mais falha. No que tange a ações preventivas, o Brasil possui uma grande escassez perdendo até para países menos desenvolvidos como Quênia e Turquia.
              </Label>
              <Label className="text-[#73225D] md:text-1.3xl text-justify" style={{ fontSize: "1.3rem", fontFamily: "Rosario", marginBottom: "1rem", lineHeight: "1.3", maxWidth: "200%",}}>
              Por isso, ao trabalhar na prevenção buscamos resguardar nossas crianças e proporcionar as mulheres uma independência financeira e socioemocional, para que ela possua mais força para sair do ciclo repetitivo de violência.
              </Label>
            </div>

            {/* Imagem à direita */}
            <div className="h-auto flex flex-col justify-center items-center md:w-1/2 md:px-8">
              <img 
                src="/img/lili-leda.png" 
                className="max-w-full max-h-[90vh] object-contain" 
                alt="Leda e Lili é um conto para a conscientização sobre o abuso infantil. Escrito por Diana Monteiro e Fabiane Prado. Ilustração de Renata Ramos."
              />
            </div>
          </div>
            
          <div 
            id="events"
            className="w-full min-h-screen flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center md:p-8"
            style={{ backgroundImage: "url('/img/homepage4bg.png')" }}
          >
            {/* <EventsSection /> */}

          </div>
            


          <div 
            id="donate"
            className="w-full min-h-screen flex flex-col items-center justify-start bg-no-repeat bg-cover bg-center md:p-8"
            style={{ backgroundImage: "url('/img/homepage5bg.png')" }}
          >
            <div className="flex flex-col items-start justify-center text-left h-screen">
            <Label className="text-[#F2F2F2] text-6xl sm:text-7xl md:text-7xl lg:text-5xl xl:text-7xl font-peaceSans font-bold max-w-[60%]">
            Saiba como financiar nossos projetos
            </Label>
            <Label className="text-[#F2F2F2] text-2xl sm:text-3xl md:text-3xl lg:text-1xl xl:text-4xl mb-4 max-w-[60%] font-rosario text-justify">
            Doe
            </Label>
            <Label className="text-[#F2F2F2] text-2xl sm:text-3xl md:text-3xl lg:text-1xl xl:text-4xl mb-4 max-w-[60%] font-rosario text-justify">
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

            <div id="contact" className="text-[#73225D] sm:mt-60 text-3xl items-center justify-center">
              <Label
                className="text-[#BF6550] sm:mt-60 text-3xl items-center"
                style={{
                  fontSize: '2rem',
                  fontFamily: 'Peace Sans',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  maxWidth: '100%',
                }}
              >
                Contatos
              </Label>

              <div className="sm:mt-4 flex justify-center items-center sm:space-x-6">
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
                className="text-[#73225D] text-xl font-rosario underline"
              >
                <img loading="lazy" src="https://img.shields.io/badge/Google%20Maps-E1306C?style=for-the-badge&logo=googlemaps&logoColor=white"></img>
              </a>
              </div>
            </div>
          </div>
  </>
  );
}
