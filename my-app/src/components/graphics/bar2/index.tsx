'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface EventData {
  event_name: string;
  total_inscriptions: number;
  total_presents: number;
}

const BarChart: React.FC<{ data: EventData[]; title: string }> = ({ data = [], title }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>Nenhum dado disponível para exibir o gráfico</p>;
  }

  const labels = data.map(event => event.event_name);
  const totalInscriptions = data.map(event => event.total_inscriptions);
  const totalPresents = data.map(event => event.total_presents);

  const truncateLabel = (label: string) => {
    return label.length > 10 ? label.substring(0) + '...' : label;
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
        label: 'Total Presente',
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
    <div style={{ width: '100%', height: '100%', minWidth:'500px'}}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
