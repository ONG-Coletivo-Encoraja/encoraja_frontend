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
      href: '/pagina-inicial',
      icon: <Home size={25} color="#702054" />,
      active: pathname === '/pagina-inicial',
      position: 'top',
    },
    {
      name: 'Usuários',
      href: '/usuarios',
      icon: <Users size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/usuarios'),
      position: 'top',
    },
    {
      name: 'Eventos',
      href: '/eventos',
      icon: <Calendar size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/eventos'),
      position: 'top',
    },
    {
      name: 'Inscrições',
      href: '/inscricoes',
      icon: <CalendarPlus2 size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/inscricoes'),
      position: 'top',
    },
    {
      name: 'Candidatos',
      href: '/solicitacoes',
      icon: <HandHeart size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/solicitacoes'),
      position: 'top',
    },
    {
      name: 'Dashboard',
      href: '/relatorios/dashboard',
      icon: <ChartNoAxesCombined size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/relatorios/dashboard'),
      position: 'top',
    },
    {
      name: 'Relatórios de eventos',
      href: '/relatorios/eventos',
      icon: <FileChartColumn size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/relatorios/eventos'),
      position: 'top',
    },
    {
      name: 'Denúncias',
      href: '/denuncias',
      icon: <Megaphone size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/denuncias'),
      position: 'top',
    },
  ];
};