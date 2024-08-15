// navbar.tsx

'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LogoutConfirmation from '@/components/pop-ups/LogoutConfirmation';
import { logout, getUserData } from '../../app/api/auth'; // Importando a função getUserData
import { useRouter } from 'next/navigation';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const MyAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type NavbarProps = {
  open: boolean;
  handleDrawerOpen: () => void;
};

export default function Navbar({ open, handleDrawerOpen }: NavbarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [logoutDialogOpen, setLogoutDialogOpen] = React.useState(false);
  const [userName, setUserName] = React.useState<string | null>(null);
  
  const router = useRouter();

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData();
        console.log('User Data:', userData); // Verifique a resposta da API
        setUserName(userData.name); // Ajuste conforme a estrutura de dados
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };
    
    fetchUserData();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout(); // Chama a função de logout
      router.push('/login'); // Redireciona para a página de login
    } catch (error) {
      console.error('Logout failed', error);
    } 
  }; 


  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar position="fixed" open={open} sx={{ bgcolor: '#702054' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <img
              src="/img/mini-logo.png"
              alt="Logo"
              style={{ height: '50px' }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            onClick={handleClick}
            sx={{
              borderColor: 'white',
              color: 'white',
              backgroundColor: 'transparent',
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            {userName || 'Carregando...'}
            <ArrowDropDownIcon sx={{ ml: 1 }} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => setLogoutDialogOpen(true)}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </MyAppBar>
      <LogoutConfirmation
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        onConfirm={handleLogout}
      />
    </Box>
  );
}
