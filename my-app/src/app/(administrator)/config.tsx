import { usePathname } from 'next/navigation';

import { Calendar, Home, Users, HandHeart, ChartNoAxesCombined, FileChartColumn, Megaphone, UserRoundCheck, CalendarHeart, Contact, CalendarPlus2 } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Página Inicial',
      href: '/home-admin',
      icon: <Home size={25} color="#702054" />,
      active: pathname === '/home-admin',
      position: 'top',
    },
    {
      name: 'Usuários',
      href: '/users',
      icon: <Users size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/users'),
      position: 'top',
    },
    {
      name: 'Eventos',
      href: '/all-events',
      icon: <Calendar size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/all-events'),
      position: 'top',
    },
    {
      name: 'Inscrições',
      href: '/all-inscriptions',
      icon: <CalendarPlus2 size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/all-inscriptions'),
      position: 'top',
    },
    {
      name: 'Candidatos',
      href: '/accept-volunteers',
      icon: <HandHeart size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/accept-volunteers'),
      position: 'top',
    },
    {
      name: 'Dashboard',
      href: '/general-reports',
      icon: <ChartNoAxesCombined size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/general-reports'),
      position: 'top',
    },
    {
      name: 'Relatórios de eventos',
      href: '/event-report',
      icon: <FileChartColumn size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/event-report'),
      position: 'top',
    },
    {
      name: 'Denúncias',
      href: '/complaints',
      icon: <Megaphone size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/complaints'),
      position: 'top',
    },
  ];
};
