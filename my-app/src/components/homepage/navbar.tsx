import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
      <AppBar position="static" sx={{ bgcolor: '#702054' }}>
        <Toolbar>
          <IconButton>
            {/* Adicione um ícone aqui, se necessário */}
          </IconButton>
          <img
            src="/img/mini-logo.png"
            alt="Logo"
            style={{ height: '50px', marginRight: '16px', marginLeft: '0px' }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Link href="/login" color="inherit" underline="none">
            <Button color="inherit">Login</Button>
          </Link>
          <Link href="/register" color="inherit" underline="none">
            <Button color="inherit">Cadastre-se</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
