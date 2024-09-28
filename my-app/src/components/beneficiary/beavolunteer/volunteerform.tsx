'use client';

import * as React from "react";
import { VolunteerForm } from "@/components/shared/volunteerForm";
import { useSession } from "next-auth/react";
import { getUserData } from "@/app/api/auth";
import { UserData } from "@/interfaces/IUserData";

export function BeAVolunteer() {
  const { data: session } = useSession();
  const [profileData, setProfileData] = React.useState<UserData | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const permission = session?.user?.permission;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setProfileData(data);
        console.log(data);
      } catch (err) {
        setError('Erro ao buscar dados do perfil.');
        console.error("Error fetching user data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProfileSubmit = async (formData: UserData) => {


      console.log("teste");

  };


  const profileFormData = [
    { id: "name", label: "Nome completo", type: "text", placeholder: "Seu nome", value: profileData?.name || "" },
    { id: "date_birthday", label: "Data de nascimento", type: "date", value: profileData?.date_birthday || "" },
    { id: "phone", label: "Telefone", type: "text", placeholder: "Seu telefone", value: profileData?.phone || "" },
    { id: "race", label: "Raça", type: "select", options: [
      { value: "white", label: "Branca" },
      { value: "asian", label: "Amarela" },
      { value: "mixed", label: "Parda" },
      { value: "black", label: "Preta" }
    ], value: profileData?.ethnicity || "" },
    { id: "gender", label: "Gênero", type: "select", options: [
      { value: "male", label: "Masculino" },
      { value: "female", label: "Feminino" },
      { value: "outher", label: "Prefiro não dizer" }
    ], value: profileData?.gender || "" },
    { id: "email", label: "Email", type: "text", placeholder: "Seu email", value: profileData?.email || "" },
    { id: "cpf", label: "CPF", type: "text", placeholder: "Seu CPF", value: profileData?.cpf || "" },
    { id: "zip_code", label: "CEP", type: "text", placeholder: "Seu CEP", value: profileData?.zip_code || "" },
    { id: "street", label: "Rua", type: "text", placeholder: "Sua rua", value: profileData?.street || "" },
    { id: "number", label: "Número", type: "text", placeholder: "Seu número", value: profileData?.number || "" },
    { id: "neighborhood", label: "Bairro", type: "text", placeholder: "Seu bairro", value: profileData?.neighbourhood || "" },
    { id: "city", label: "Cidade", type: "text", placeholder: "Sua cidade", value: profileData?.city || "" },
    { id: "how_know", label: "Como soube da vaga?", type: "text", },
    { id: "availability", label: "Disponibilidade", type: "text", },
    { id: "expectations", label: "Expectativa", type: "text", },
    { id: "course_experience", label: "Experiência", type: "text", },

  ];

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <VolunteerForm formData={profileFormData} onSubmit={handleProfileSubmit} />
  );
}
