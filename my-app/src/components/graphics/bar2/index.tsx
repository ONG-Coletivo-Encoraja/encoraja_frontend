import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarChart: React.FC<{ data: { event_name: string, total_inscriptions: number, total_presents: number }[], title: string }> = ({ data, title }) => {
  const labels = data.map(event => event.event_name);
  const totalInscriptions = data.map(event => event.total_inscriptions);
  const totalPresents = data.map(event => event.total_presents);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Total Inscritos',
        data: totalInscriptions,
        backgroundColor: '#FF6D01',
        borderColor: '#FF6D01',
        borderWidth: 1,
      },
      {
        label: 'Total Presente',
        data: totalPresents,
        backgroundColor: '#741B47',
        borderColor: '#741B47',
        borderWidth: 1,
      }
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 10,
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
