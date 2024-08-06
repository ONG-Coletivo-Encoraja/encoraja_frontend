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
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '../../app/api/auth';

const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#702054',
          '&:hover': {
            backgroundColor: '#702054',
          },
        },
      },
    },
  },
});

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [date_birthday, setDateBirthday] = useState('');
  const [race, setRace] = useState('');
  const [gender, setGender] = useState('');
  const [image_term, setImageTerm] = useState(false);
  const [data_term, setDataTerm] = useState(false);
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighbourhood, setNeighbourhood] = useState('');
  const [city, setCity] = useState('');
  const [zip_code, setZipCode] = useState('');
  const [phone, setPhone] = useState('');

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const data = {
      name,
      email,
      password,
      cpf,
      date_birthday,
      race,
      gender,
      image_term,
      data_term,
      street,
      number,
      neighbourhood,
      city,
      zip_code,
      phone,
    };

    try {
      const response = await register(data);
      if (response) {
        router.push('/login');
      }
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: 'url("/img/background-girls.png")', backgroundSize: 'cover' }}>
        <Container component="main" maxWidth="md" sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2, paddingLeft: 20, paddingRight: 20, paddingTop: 6, paddingBottom: 6 }}>
          <CssBaseline />
          <Box sx={{ marginTop: 4, marginBottom: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/img/writted-logo.png" alt="Logo" style={{ height: '60px', marginRight: '16px', marginLeft: '0px' }} />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nome Completo"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="date_birthday"
                    label="Data de Nascimento"
                    name="date_birthday"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => setDateBirthday(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="phone"
                    label="Telefone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </Grid>

                {/* Terceira linha */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal" required>
                    <InputLabel id="race-label">Raça</InputLabel>
                    <Select
                      labelId="race-label"
                      id="race"
                      name="race"
                      value={race}
                      onChange={(e) => setRace(e.target.value)}
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
                    <InputLabel id="gender-label">Gênero</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <MenuItem value="male">Masculino</MenuItem>
                      <MenuItem value="female">Feminino</MenuItem>
                      <MenuItem value="prefer not say">Prefiro não dizer</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Quarta linha */}
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="zip_code"
                    label="CEP"
                    name="zip_code"
                    autoComplete="zip_code"
                    value={zip_code}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="neighbourhood"
                    label="Bairro"
                    name="neighbourhood"
                    autoComplete="neighbourhood"
                    value={neighbourhood}
                    onChange={(e) => setNeighbourhood(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="Cidade"
                    name="city"
                    autoComplete="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Grid>

                {/* Quinta linha */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="street"
                    label="Rua"
                    name="street"
                    autoComplete="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="number"
                    label="Número"
                    name="number"
                    autoComplete="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Grid>

                {/* Sexta linha */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirmar Senha"
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox checked={image_term} color="primary" onChange={(e) => setImageTerm(e.target.checked)} />}
                label="Autorizo o uso de imagem"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox checked={data_term} color="primary" onChange={(e) => setDataTerm(e.target.checked)} />}
                label="Autorizo o uso de dados"
                labelPlacement="start"
              />
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
                  <Link href="/login" variant="body2">
                    Já possui uma conta? Faça login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
