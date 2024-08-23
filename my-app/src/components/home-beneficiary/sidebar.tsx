// Sidebar.tsx
import * as React from 'react';
import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const drawerWidthOpen = 'w-[240px]'; // Largura maior quando aberto
const drawerWidthClosed = 'w-[72px]'; // Largura menor quando fechado

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
}

export default function Sidebar({ open, handleDrawerClose, handleDrawerOpen }: SidebarProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleIconClick = () => {
    if (!open) {
      handleDrawerOpen(); // Abre a sidebar se estiver fechada
    }
  };

  useEffect(() => {
    if (!open) {
      setOpenIndex(null); // Fecha os submenus quando a sidebar fecha
    }
  }, [open]);

  const icons = [
    "/img/sidebar-icons/home.png",
    "/img/sidebar-icons/volunteers.png",
    "/img/sidebar-icons/events.png",
    "/img/sidebar-icons/registrations.png"
  ];

  const menuItems = [
    { text: 'Página inicial', path: '/home' },
    {
      text: 'Voluntários', subItems: [
        { name: 'Seja Voluntário', path: '/voluntarios/aceitar-voluntarios' }
      ]
    },
    {
      text: 'Eventos', subItems: [
        { name: 'Todos os eventos', path: '/eventos/todos-os-eventos' }
      ]
    },
    {
      text: 'Inscrições', subItems: [
        { name: 'Minhas inscrições', path: '/inscricoes/todas-as-inscricoes' }
      ]
    }
  ];

  return (
    <div className="flex relative">
      <div
        className={`bg-white text-black flex flex-col h-screen transition-all duration-300 border-r border-gray-300 ${open ? drawerWidthOpen : drawerWidthClosed}`}
      >
        <div className="flex justify-center items-center p-2">
          <button onClick={handleDrawerClose}>
            <img src="/img/writted-logo.png" alt="Logo" className="h-[50px]" />
          </button>
        </div>
        <hr className="border-t border-gray-300" />
        <ul>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.text}>
              <li className={`block mb-2 ${!item.subItems ? 'cursor-pointer' : ''}`}>
                <button
                  onClick={() => {
                    if (item.subItems) {
                      handleClick(index); // Abre ou fecha o submenu
                    } else {
                      handleIconClick(); // Abre a sidebar se estiver fechada
                      if (item.path) {
                        window.location.href = item.path; // Navega para a página se não houver submenu
                      }
                    }
                  }}
                  className="w-full flex items-center px-6 py-4 justify-start space-x-4 text-left focus:outline-none transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={icons[index]}
                      alt=""
                      className="h-6"
                    />
                  </div>
                  <a
                    href={item.path}
                    className={`flex-grow ${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                  >
                    {item.text}
                  </a>
                  {item.subItems && open && (
                    <div className={`ml-2 ${open ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}>
                      {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  )}
                </button>
              </li>
              {item.subItems && openIndex === index && (
                <ul className="pl-12 space-y-2 bg-gray-100">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.path} className="block px-4 py-2 text-gray-600 hover:text-black">
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      {!open && (
        <button
          onClick={handleDrawerOpen}
          className="absolute top-0 left-0 p-2 bg-gray-200 z-50"
        >
          <img src="/img/sidebar-icons/menu.png" alt="Open Sidebar" className="h-6" />
        </button>
      )}
    </div>
  );
}
