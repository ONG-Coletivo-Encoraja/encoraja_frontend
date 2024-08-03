'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Criação do tema com customização para o botão
const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#702054',
          '&:hover': {
            backgroundColor: '#702054', // Mantém a cor ao passar o mouse
          },
        },
      },
    },
  },
});

export default function RegistrationForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nomeCompleto: data.get('nomeCompleto'),
      dataNascimento: data.get('dataNascimento'),
      telefone: data.get('telefone'),
      email: data.get('email'),
      cpf: data.get('cpf'),
      genero: data.get('genero'),
      raca: data.get('raca'),
      cep: data.get('cep'),
      rua: data.get('rua'),
      bairro: data.get('bairro'),
      cidade: data.get('cidade'),
      numero: data.get('numero'),
      senha: data.get('senha'),
      confirmarSenha: data.get('confirmarSenha'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundImage: 'url("/img/background-girls.png")', // Substitua com o caminho para sua imagem
          backgroundSize: 'cover',
        }}
      >
        <Container
          component="main"
          maxWidth="md"
          sx={{ 
            backgroundColor: 'white', 
            padding: 4, 
            borderRadius: 2,
            paddingLeft: 20, // Adiciona padding nas laterais
            paddingRight: 20,
            paddingTop: 6, // Adiciona padding no topo
            paddingBottom: 6 // Adiciona padding na parte inferior
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              marginBottom: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src="/img/writted-logo.png" alt="Logo" style={{ height: '60px', marginRight: '16px', marginLeft: '0px' }} />

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                {/* Primeira linha */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nomeCompleto"
                    label="Nome Completo"
                    name="nomeCompleto"
                    autoComplete="name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="dataNascimento"
                    label="Data de Nascimento"
                    name="dataNascimento"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                {/* Segunda linha */}
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="telefone"
                    label="Telefone"
                    name="telefone"
                    type="tel"
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cpf"
                    label="CPF"
                    name="cpf"
                    autoComplete="cpf"
                  />
                </Grid>

                {/* Terceira linha */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal" required>
                    <InputLabel id="raca-label">Raça</InputLabel>
                    <Select
                      labelId="raca-label"
                      id="raca"
                      name="raca"
                      label="Raça"
                    >
                      <MenuItem value="Branca">Branca</MenuItem>
                      <MenuItem value="Preta">Preta</MenuItem>
                      <MenuItem value="Parda">Parda</MenuItem>
                      <MenuItem value="Amarela">Amarela</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal" required>
                    <InputLabel id="genero-label">Gênero</InputLabel>
                    <Select
                      labelId="genero-label"
                      id="genero"
                      name="genero"
                      label="Gênero"
                    >
                      <MenuItem value="Feminino">Feminino</MenuItem>
                      <MenuItem value="Masculino">Masculino</MenuItem>
                      <MenuItem value="Prefiro não dizer">Prefiro não dizer</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Quarta linha */}
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cep"
                    label="CEP"
                    name="cep"
                    autoComplete="cep"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="bairro"
                    label="Bairro"
                    name="bairro"
                    autoComplete="bairro"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cidade"
                    label="Cidade"
                    name="cidade"
                    autoComplete="cidade"
                  />
                </Grid>

                {/* Quinta linha */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="rua"
                    label="Rua"
                    name="rua"
                    autoComplete="rua"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="numero"
                    label="Número"
                    name="numero"
                    autoComplete="numero"
                  />
                </Grid>

                {/* Sexta linha */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="password"
                    id="senha"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmarSenha"
                    label="Confirmar Senha"
                    type="password"
                    id="confirmarSenha"
                    autoComplete="confirm-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Já possui uma conta? Faça login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 4, mb: 2 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
