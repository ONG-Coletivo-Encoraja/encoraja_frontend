import React from 'react';
import PieChart from '@/components/graphics/pizza';
import BarChart from '@/components/graphics/bar';
import Bar2Chart from '@/components/graphics/bar2';
import LineChart from '@/components/graphics/lines';
import LineChart2 from '@/components/graphics/lines2';
import PieChart2 from '@/components/graphics/pizza2';
import ExportButton from '@/components/pop-ups/ExportButton';

export default function GraphicsPage() {
  return (
    <>
      <div className='w-full bg-[#EDEDED] m-0'>
        <div>
          <div className='w-full flex items-center text-2xl font-bold justify-between p-3'>
            <div>
              <h1 className="font-bold leading-none tracking-tight text-[#702054] text-[24px]">Relatórios Gerais</h1>
            </div>
            <div>
              <ExportButton/>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          <div className='w-full p-5 bg-white flex justify-around items-center h-96 mb-4'>
            <div style={{ width: '45%', height: '100%' }}>
              <PieChart title="Distribuição Étnica" />
            </div>
            <div style={{ width: '45%', height: '100%' }}>
              <Bar2Chart title="Comparecimento em eventos em 2024" />
            </div>
          </div>
          <div className='w-full  p-5 bg-white flex justify-around items-center h-96 mb-4'>
            <div style={{ width: '45%', height: '100%' }}>
              <BarChart title="Média de Avaliação dos Eventos" />
            </div>
            <div style={{ width: '45%', height: '100%' }}>
              <LineChart title="Total Participação em eventos" />
            </div>
          </div>
          <div className='w-full  p-5 bg-white flex justify-around items-center h-96 mb-4'>
            <div style={{ width: '45%', height: '100%' }}>
              <PieChart2 title="Distribuição Faixa Etária" />
            </div>
            <div style={{ width: '45%', height: '100%' }}>
              <LineChart2 title="Total denúncias" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}  
