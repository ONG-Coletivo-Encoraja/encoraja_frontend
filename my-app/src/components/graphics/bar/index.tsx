'use client';

import React, { FC, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSession } from 'next-auth/react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { fetchRatingData } from '@/app/api/graphics/graph';

Chart.register(...registerables);

interface EventData {
  event_name: string;
  average_rating: number | string;
}

const BarChart: FC<{ title: string }> = ({ title }) => {
  const { data: session } = useSession();
  const [data, setData] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (session?.token) {
        try {
          const result = await fetchRatingData(session.token);
          setData(result);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    getData();
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
  const averages = data.map(event => Number(event.average_rating));

  const maxLabelLength = 10;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Média de Avaliação',
        data: averages,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
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
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 15,
          },
          callback: function (value: string | number, index: number) {
            const label = labels[index];
            return label.length > maxLabelLength ? label.substring(0, maxLabelLength) + '...' : label;
          },
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          font: {
            size: 15,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '100%', minWidth: '500px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;