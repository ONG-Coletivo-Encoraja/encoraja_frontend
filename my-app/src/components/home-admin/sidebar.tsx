import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Link from '@mui/material/Link';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 20px)`, // Ajuste a largura do Drawer quando fechado
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Centraliza horizontalmente
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const MyDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const icons = [
    "/img/sidebar-icons/home.png",
    "/img/sidebar-icons/volunteers.png",
    "/img/sidebar-icons/events.png",
    "/img/sidebar-icons/registrations.png",
    "/img/sidebar-icons/users.png",
    "/img/sidebar-icons/reports.png"
  ];

  const menuItems = [
    { text: 'Página inicial', subItems: [] },
    {
      text: 'Voluntários', subItems: [
        { name: 'Aceitar voluntários', path: '/voluntarios/aceitar-voluntarios' },
        { name: 'Todos os voluntários', path: '/voluntarios/todos-os-voluntarios' }
      ]
    },
    {
      text: 'Eventos', subItems: [
        { name: 'Cadastrar evento', path: '/home-admin/eventos' },
        { name: 'Todos os eventos', path: '/eventos/todos-os-eventos' }
      ]
    },
    {
      text: 'Inscrições', subItems: [
        { name: 'Todas as inscrições', path: '/inscricoes/todas-as-inscricoes' }
      ]
    },
    {
      text: 'Usuários', subItems: [
        { name: 'Gerenciar usuários', path: '/usuarios/gerenciar-usuarios' }
      ]
    },
    {
      text: 'Relatórios', subItems: [
        { name: 'Relatórios de voluntários', path: '/relatorios/relatorios-de-voluntarios' },
        { name: 'Relatórios gerais', path: '/relatorios/relatorios-gerais' }
      ]
    }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MyDrawer variant="permanent" open={open}>
        <DrawerHeader>
          {/* Imagem que funciona como botão para fechar o menu */}
          <IconButton onClick={handleDrawerClose}>
            <img src="/img/writted-logo.png" alt="Logo" style={{ height: '50px' }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.text}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => handleClick(index)}
                  sx={{
                    minHeight: 70,
                    justifyContent: open ? 'initial' : 'center',
                    px: 4.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={icons[index]} style={{ height: '24px' }} />
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                  {open && (openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItemButton>
              </ListItem>
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem key={subIndex} sx={{ pl: 4 }}>
                      <Link href={subItem.path} passHref>
                        <ListItemButton component="a">
                          <ListItemText primary={subItem.name} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </MyDrawer>
    </Box>
  );
}
