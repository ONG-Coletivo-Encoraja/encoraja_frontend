import { usePathname } from 'next/navigation';

import { Calendar, Home, Users, HandHeart } from 'lucide-react';

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
      name: 'Minhas inscrições',
      href: '/inscricoes',
      icon: <Users size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/inscricoes'),
      position: 'top',
    },
    {
      name: 'Eventos',
      href: '/eventos',
      icon: <Calendar size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/eventos'),
      position: 'top',
    },
  ];
};
