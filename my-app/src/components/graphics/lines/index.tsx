'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const LineChart: React.FC<{ data: Record<string, number>; title: string }> = ({ data, title }) => {
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
          callback: function (value: any) {
            return value;
          },
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
    <div style={{ width: '100%', height: '100%', minWidth:'500px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
