'use client';

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSession } from 'next-auth/react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import API from "@/services/api";

Chart.register(...registerables);

interface EventData {
  event_name: string;
  total_inscriptions: number;
  total_presents: number;
}

const BarChart: React.FC<{ title: string }> = ({ title }) => {
  const { data: session } = useSession();
  const [data, setData] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        try {
          const response = await API.get('/graphics/present', {
            headers: {
              'Authorization': `Bearer ${session.token}`,
              'Content-Type': 'application/json',
            },
          });
          setData(response.data);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [session]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <p>Nenhum dado disponível para exibir o gráfico</p>;
  }

  const labels = data.map(event => event.event_name);
  const totalInscriptions = data.map(event => event.total_inscriptions);
  const totalPresents = data.map(event => event.total_presents);

  const truncateLabel = (label: string) => {
    return label.length > 10 ? label.substring(0, 10) + '...' : label;
  };

  const chartData = {
    labels: labels.map(truncateLabel),
    datasets: [
      {
        label: 'Total Inscritos',
        data: totalInscriptions,
        backgroundColor: '#FF6D01',
      },
      {
        label: 'Total Presentes',
        data: totalPresents,
        backgroundColor: '#741B47',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 20,
          font: {
            size: 15,
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
          weight: 'bold' as const,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 15,
          },
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        ticks: {
          stepSize: 10,
          font: {
            size: 15,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%', minWidth: '500px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
