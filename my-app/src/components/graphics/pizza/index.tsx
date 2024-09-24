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

  return (
      <div style={{ width: '100%', height: '100%', marginLeft:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
        <Pie data={chartData} options={options} />
      </div>
  );
};

export default PieChart;
