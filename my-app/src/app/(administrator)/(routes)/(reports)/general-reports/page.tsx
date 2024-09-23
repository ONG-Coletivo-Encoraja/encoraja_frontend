'use client';

import * as React from 'react';
import PieChart from '@/components/graphics/pizza';
import BarChart from '@/components/graphics/bar';
import Bar2Chart from '@/components/graphics/bar2';
import LineChart from '@/components/graphics/lines';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function Home() {
  const { data: session } = useSession();
  const [dataEthnicity, setdataEthnicity] = React.useState<{ [key: string]: number }>({});
  const [dataAge, setdataAge] = React.useState<{ [key: string]: number }>({});
  const [dataAvarageEvents, setdataAvarageEvents] = React.useState<{ event_name: string; average_rating: number | string }[]>([]);
  const [dataParticipation, setdataParticipation] = React.useState<{ [key: string]: number }>({});
  const [eventData, setEventData] = React.useState<{ event_name: string, total_inscriptions: number, total_presents: number }[]>([]);
  
  React.useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/graphics/ethnicity', {
            headers: {
              'Authorization': `Bearer ${session.token}`,
              'Content-Type': 'application/json',
            },
          });
          setdataEthnicity(response.data);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      }
    };

    fetchData();
  }, [session]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/graphics/age', {
            headers: {
              'Authorization': `Bearer ${session.token}`,
              'Content-Type': 'application/json',
            },
          });
          setdataAge(response.data);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      }
    };

    fetchData();
  }, [session]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/graphics/rating', {
            headers: {
              Authorization: `Bearer ${session.token}`,
              'Content-Type': 'application/json',
            },
          });
          setdataAvarageEvents(response.data);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      }
    };

    fetchData();
  }, [session]);

  React.useEffect(() => {
    const fetchMonthlyData = async () => {
      if (session?.token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/graphics/participation', {
            headers: {
              Authorization: `Bearer ${session.token}`,
              'Content-Type': 'application/json',
            },
          });
          setdataParticipation(response.data);
        } catch (error) {
          console.error('Erro ao buscar os dados mensais:', error);
        }
      }
    };

    fetchMonthlyData();
  }, [session]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/graphics/events', {
            headers: {
              Authorization: `Bearer ${session.token}`,
              'Content-Type': 'application/json',
            },
          });
          setEventData(response.data);
        } catch (error) {
          console.error('Erro ao buscar os dados dos eventos:', error);
        }
      }
    };

    fetchData();
  }, [session]);

  return (
    <>
      <a>RELATÓRIOS GERAIS</a>
      <div className='w-52 flex h-72'>
        <PieChart data={dataEthnicity} title="Distribuição Étnica"  />
        <PieChart data={dataAge} title="Distribuição Faixa Etária" />
        <BarChart data={dataAvarageEvents} title="Média de Avaliação dos Eventos" />
      </div>
      <div className='w-52 flex h-72'>
        <LineChart data={dataParticipation} title="Total Participação em eventos" />
        <Bar2Chart data={eventData} title="Comparecimento em eventos em 2024" />
      </div>
      
    </>
  );
}
