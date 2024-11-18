import API from '@/services/api';
import axios, { AxiosError } from 'axios';
import { InscriptionsResponse } from '@/interfaces/IInscription';
import { Inscription } from '@/interfaces/IInscription';

export async function getMyInscriptions(token: string): Promise<InscriptionsResponse> { 
  try {
    const response = await API.get('/myInscriptions', {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected Error:', error);
    }
    throw error;
  }
}

export async function deleteInscription(token: string, id: string, toast: Function) { 
  try {
    const response = await API.delete(`/inscription/${id}`, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
      },
    });

    toast({
      title: "Sucesso!",
      description: "Inscrição cancelada com sucesso!",
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errors = error.response.data.errors;
      if (errors && typeof errors === 'object') {
        const firstKey = Object.keys(errors)[0];
        const firstErrorMessage = errors[firstKey][0];

        toast({
          title: "Falha ao cancelar inscrição!",
          description: firstErrorMessage,
          variant: "destructive",
        });
        throw error
      } else {
        toast({
          title: "Erro!",
          description: error.response.data.message,
          variant: "destructive",
        });
        throw error
      }
    } else {
      toast({
        title: "Erro!",
        description: "Ocorreu um erro desconhecido. Tente novamente.",
        variant: "destructive",
      });
    throw error;
  }
}
}


  export async function createInscription(event_id: number, token: string): Promise<any> {
    try {
      const response = await API.post(
        '/inscription',
        { event_id },  
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response?.data || error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
      throw error;
    }
  }
  
