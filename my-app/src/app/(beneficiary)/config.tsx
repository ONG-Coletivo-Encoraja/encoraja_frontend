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
      href: '/volunteers',
      icon: <HandHeart size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/volunteers'),
      position: 'top',
    },
    {
      name: 'Minhas inscrições',
      href: '/inscriptions',
      icon: <Users size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/inscriptions'),
      position: 'top',
    },
    {
      name: 'Eventos',
      href: '/events',
      icon: <Calendar size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/events'),
      position: 'top',
    },
  ];
};
