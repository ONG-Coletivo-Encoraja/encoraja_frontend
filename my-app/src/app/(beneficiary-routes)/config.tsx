import { usePathname } from 'next/navigation';

import { Bell, Briefcase, Home, Settings, User } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/',
      icon: <Home size={25} color="#702054" />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Perfil',
      href: '/Perfil',
      icon: <User size={25} color="#702054" />,
      active: isNavItemActive(pathname, '/perfil'),
      position: 'top',
    },
    {
      name: 'Notifications',
      href: '/notifications',
      icon: <Bell size={20} color="#702054" />,
      active: isNavItemActive(pathname, '/notifications'),
      position: 'top',
    },
    {
      name: 'Events',
      href: '/events',
      icon: <Briefcase size={20} color="#702054" />,
      active: isNavItemActive(pathname, '/events'),
      position: 'top',
    },
    {
      name: 'events',
      href: '/events',
      icon: <Settings size={20} color="#702054" />,
      active: isNavItemActive(pathname, '/events'),
      position: 'bottom',
    },
  ];
};
