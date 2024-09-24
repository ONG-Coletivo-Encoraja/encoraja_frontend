'use client';

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PieChart from '@/components/graphics/pizza';
import BarChart from '@/components/graphics/bar';
import Bar2Chart from '@/components/graphics/bar2';
import LineChart from '@/components/graphics/lines';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function Home() {
  const { data: session } = useSession();
  const [dataEthnicity, setdataEthnicity] = React.useState({});
  const [dataAge, setdataAge] = React.useState({});
  const [dataAvarageEvents, setdataAvarageEvents] = React.useState([]);
  const [dataParticipation, setdataParticipation] = React.useState({});
  const [eventData, setEventData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        setLoading(true); 
        try {
          const responseEthnicity = await axios.get('http://127.0.0.1:8000/api/graphics/ethnicity', {
            headers: { 'Authorization': `Bearer ${session.token}`, 'Content-Type': 'application/json' },
          });
          setdataEthnicity(responseEthnicity.data);

          const responseAge = await axios.get('http://127.0.0.1:8000/api/graphics/age', {
            headers: { 'Authorization': `Bearer ${session.token}`, 'Content-Type': 'application/json' },
          });
          setdataAge(responseAge.data);

          const responseRating = await axios.get('http://127.0.0.1:8000/api/graphics/rating', {
            headers: { 'Authorization': `Bearer ${session.token}`, 'Content-Type': 'application/json' },
          });
          setdataAvarageEvents(responseRating.data);

          const responseParticipation = await axios.get('http://127.0.0.1:8000/api/graphics/participation', {
            headers: { 'Authorization': `Bearer ${session.token}`, 'Content-Type': 'application/json' },
          });
          setdataParticipation(responseParticipation.data);

          const responsePresent = await axios.get('http://127.0.0.1:8000/api/graphics/present', {
            headers: { 'Authorization': `Bearer ${session.token}`, 'Content-Type': 'application/json' },
          });
          setEventData(responsePresent.data);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [session]);

  return (
    <>
      <div className='w-full bg-[#EDEDED] m-0'>
        <div className='w-full flex justify-center items-center text-2xl font-bold text-[#666666]'>
          <h1>Relatórios Gerais</h1>
        </div>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          <>
            <div className='flex flex-col gap-10'>
              <div className='w-full p-5 bg-white flex justify-around items-center h-96 mb-4'>
                <div style={{ width: '45%', height: '100%' }}>
                  <PieChart data={dataEthnicity} title="Distribuição Étnica" />
                </div>
                <div style={{ width: '45%', height: '100%' }}>
                  <Bar2Chart data={eventData} title="Comparecimento em eventos em 2024" />
                </div>
              </div>
              <div className='w-full  p-5 bg-white flex justify-around items-center h-96 mb-4'>
                <div style={{ width: '45%', height: '100%' }}>
                  <BarChart data={dataAvarageEvents} title="Média de Avaliação dos Eventos" />
                </div>
                <div style={{ width: '45%', height: '100%' }}>
                  <LineChart data={dataParticipation} title="Total Participação em eventos" />
                </div>
              </div>
              <div className='w-full  p-5 bg-white flex justify-center items-center h-96'>
                <div style={{ width: '80%', height: '100%' }}>
                  <PieChart data={dataAge} title="Distribuição Faixa Etária" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
  
}  
