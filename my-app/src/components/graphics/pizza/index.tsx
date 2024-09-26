'use client';

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables, ChartOptions } from 'chart.js';
import { useSession } from 'next-auth/react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import API from "@/services/api";

Chart.register(...registerables);

interface Data {
  [key: string]: number;
}

const PieChart: React.FC<{ title: string }> = ({ title }) => {
  const { data: session } = useSession();
  const [data, setData] = useState<Data>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.token) {
        try {
          const response = await API.get('/api/graphics/ethnicity', {
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

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['#702054', '#FF6D01', '#68D4F6', '#2F713A', '#B9B6B6', '#674EA7'],
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          padding: 5,
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
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', marginLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;