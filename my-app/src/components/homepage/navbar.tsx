import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
      <AppBar position="static" sx={{ bgcolor: '#702054' }}>
        <Toolbar>
          <img
            src="/img/mini-logo.png"
            alt="Logo"
            style={{ height: '50px', marginRight: '16px', marginLeft: '0px' }} // Aumentar o tamanho e ajustar a margem
          />
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
          <Button color="inherit">Cadastre-se</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
