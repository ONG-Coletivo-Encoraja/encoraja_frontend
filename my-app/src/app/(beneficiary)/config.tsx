import { usePathname } from 'next/navigation';

import { Calendar, Home, Users, HandHeart } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/home',
      icon: <Home size={25} color="#702054" />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Seja Voluntário',
      href: '/seja-voluntario',
      icon: <HandHeart size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/seja-voluntario'),
      position: 'top',
    },
    {
      name: 'Minhas inscrições',
      href: '/minhas-inscricoes',
      icon: <Users size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/minhas-inscricoes'),
      position: 'top',
    },
    {
      name: 'Eventos',
      href: '/todos-os-eventos',
      icon: <Calendar size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/todos-os-eventos'),
      position: 'top',
    },
  ];
};