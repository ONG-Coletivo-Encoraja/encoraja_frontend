'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
      <AppBar position="static" sx={{ bgcolor: '#702054' }}>
        <Toolbar>
          <img
            src="/img/mini-logo.png"
            alt="Logo"
            style={{ height: '50px', marginRight: '16px', marginLeft: '0px' }}
          />
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
            Nome do usuário
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
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
