'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from "../../../components/login/loginform"

const defaultTheme = createTheme({
  components: { MuiButton: { styleOverrides: { root: { backgroundColor: '#702054', '&:hover': { backgroundColor: '#702054' } } } } }
});

export default function Login() {
    return (
      <LoginForm/>
    );
  }