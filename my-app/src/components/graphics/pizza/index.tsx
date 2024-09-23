import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables, ChartOptions } from 'chart.js';

Chart.register(...registerables);

interface Data {
  [key: string]: number;
}

const PieChart: React.FC<{ data: Data; title: string }> = ({ data, title }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['#702054', '#FF6D01', '#68D4F6', '#2F713A', '#B9B6B6'],
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '200px' }}>
      <Pie data={chartData} options={options} />
    </div>
  )
};

export default PieChart;
