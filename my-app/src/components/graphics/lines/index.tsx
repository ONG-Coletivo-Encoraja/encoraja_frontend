'use client';

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

Chart.register(...registerables);

const LineChart: React.FC<{ title: string }> = ({ title }) => {
  const { data: session } = useSession();
  const [data, setData] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/graphics/participation', {
            headers: {
              'Authorization': `Bearer ${session.token}`,
              'Content-Type': 'application/json',
            },
          });
          setData(response.data);
          console.log(response)
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [session]);

  const labels = Object.keys(data);
  const values = Object.values(data);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Valores por mês',
        data: values,
        fill: false,
        backgroundColor: '#FF6D01',
        borderColor: '#FF6D01',
        tension: 0.3,
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
            weight: 'normal' as const,
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
      y: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        ticks: {
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
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default LineChart;