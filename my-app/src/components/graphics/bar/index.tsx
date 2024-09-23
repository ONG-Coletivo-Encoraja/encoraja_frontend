'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface EventData {
  event_name: string;
  average_rating: number | string;
}

const BarChart: React.FC<{ data: EventData[]; title: string }> = ({ data = [], title }) => {
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
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          callback: function (value: string | number, index: number) {
            const label = labels[index];
            if (label.length > maxLabelLength) {
              return label.substring(0, maxLabelLength) + '...'; 
            }
            return label;
          },
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: function (value: any) {
            return value;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '600px', height: '200px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
