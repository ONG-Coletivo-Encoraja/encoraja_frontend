import { Calendar, Home, Users, HandHeart, MailPlus, FileChartLine, MessageCircleWarning } from 'lucide-react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Página inicial',
    path: '/home-admin',
    icon: <Home size={25} color="#702054" />,
  },
  {
    title: 'Voluntários',
    path: '/projects',
    icon: <HandHeart size={25} color="#702054" />,
    submenu: true,
    subMenuItems: [
      { title: 'Aceitar voluntários', path: '/accept-volunteers' },
      { title: 'Todos os voluntários', path: '/all-volunteers' },
    ],
  },
  {
    title: 'Eventos',
    path: '/settings',
    icon: <Calendar size={25} color="#702054" />,
    submenu: true,
    subMenuItems: [
      { title: 'Cadastrar evento', path: '/register-event' },
      { title: 'Todos os eventos', path: '/all-events' },
    ],
  },
  {
    title: 'Inscrições',
    path: '/settings',
    icon: <Users size={25} color="#702054" />,
    submenu: true,
    subMenuItems: [
      { title: 'Todas as incrições', path: '/all-inscriptions' },
    ],
  },
  {
    title: 'Usuários',
    path: '/settings',
    icon: <MailPlus size={25} color="#702054" />,
    submenu: true,
    subMenuItems: [
      { title: 'Gerenciar usuários', path: '/users' },
    ],
  },
  {
    title: 'Relatórios',
    path: '/settings',
    icon: <FileChartLine size={25} color="#702054" />,
    submenu: true,
    subMenuItems: [
      { title: 'Relatórios de eventos', path: '/event-report' },
      { title: 'Relatórios gerais', path: '/general-reports' },
    ],
  },
  {
    title: 'Denúncias',
    path: '/complaints',
    icon: <MessageCircleWarning size={25} color="#702054" />,
  },

];
