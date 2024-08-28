'use client'; // Adicione esta linha para garantir que o código seja executado no lado do cliente

import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerEvent } from '../../../app/api/auth';
import { EventData } from '../../../interfaces/IEventData'; 

// Definindo o tema do Material-UI
const defaultTheme = createTheme({
    components: { 
        MuiButton: { 
            styleOverrides: { 
                root: { 
                    backgroundColor: '#702054', 
                    '&:hover': { backgroundColor: '#702054' } 
                } 
            } 
        } 
    }
});

// Componente do formulário de eventos
export default function EventsForm({ drawerOpen }: { drawerOpen: boolean }) {
    // State variables for each form field
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [modality, setModality] = useState('');
    const [vacancies, setVacancies] = useState('');
    const [social_vacancies, setSocialVacancies] = useState('');
    const [regular_vacancies, setRegularVacancies] = useState('');
    const [target_audience, setTargetAudience] = useState('');
    const [material, setMaterial] = useState('');
    const [interest_area, setInterestArea] = useState('');
    const [price, setPrice] = useState('');
    const [workload, setWorkload] = useState('');
    const [owner, setOwner] = useState('');

    const router = useRouter();

    // Marcar a função como async
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const data: EventData = {
            name,
            description,
            date,
            time,
            modality,
            status,
            type,
            target_audience,
            vacancies,
            social_vacancies,
            regular_vacancies,
            material,
            interest_area,
            price,
            workload,
            owner
        };
    
        try {
            const response = await registerEvent(data);
            console.log(response);
            if (response) {
                alert("Evento cadastrado com sucesso");
            }
        } catch (error) {
            alert('Registration event failed: ' + error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundImage: 'url("/img/background-girls.png")',
                    backgroundSize: 'cover',
                    ml: drawerOpen ? 15 : 0, 
                    transition: 'margin 0.3s', 
                    width: '100%',
                }}
            >
                <Container
                    component="main"
                    maxWidth="md"
                    sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2, marginTop: 10, marginBottom: 5}}
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
                        <Typography 
                            component="h1" 
                            variant="h5" 
                            sx={{ 
                                alignSelf: 'flex-start', 
                                mb: 2,
                                color: '#702054' ,
                                fontWeight: 'bold'
                            }}
                        >
                            Cadastro de evento
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Nome do evento"
                                        name="name"
                                        autoComplete="event-name"
                                        autoFocus
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                {/* Segunda linha */}
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="date"
                                        label="Data do evento"
                                        name="date"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="time"
                                        label="Horário do evento"
                                        name="time"
                                        type="time"
                                        InputLabelProps={{ shrink: true }}
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </Grid>
                                {/* Terceira linha */}
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="description"
                                        label="Descrição do evento"
                                        name="description"
                                        multiline
                                        rows={3}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Grid>
                                {/* Quarta linha */}
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="type"
                                            label="Tipo de evento"
                                            name="type"
                                            select
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                        >
                                            <MenuItem value="Seminário">Seminário</MenuItem>
                                            <MenuItem value="Workshop">Workshop</MenuItem>
                                            <MenuItem value="Conferência">Conferência</MenuItem>
                                            <MenuItem value="Outro">Outro</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="status"
                                            label="Status do evento"
                                            name="status"
                                            select
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <MenuItem value="Ativo">Ativo</MenuItem>
                                            <MenuItem value="Inativo">Inativo</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="madality"
                                            label="Modalidade do evento"
                                            name="modality"
                                            select
                                            value={modality}
                                            onChange={(e) => setModality(e.target.value)}
                                        >
                                            <MenuItem value="Presencial">Presencial</MenuItem>
                                            <MenuItem value="Online">Online</MenuItem>
                                            <MenuItem value="Híbrido">Híbrido</MenuItem>
                                        </TextField>
                                    </Grid>
                                </Grid>
                                {/* Quinta linha */}
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="vacancies"
                                            label="Total de vagas"
                                            name="vacancies"
                                            type="number"
                                            value={vacancies}
                                            onChange={(e) => setVacancies(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="social_vacancies"
                                            label="Vagas sociais"
                                            name="social_vacancies"
                                            type="number"
                                            value={social_vacancies}
                                            onChange={(e) => setSocialVacancies(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="regular_vacancies"
                                            label="Vagas gerais"
                                            name="generalSlots"
                                            type="number"
                                            value={regular_vacancies}
                                            onChange={(e) => setRegularVacancies(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* Sexta linha */}
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="target_audience"
                                            label="Público alvo"
                                            name="target_audience"
                                            value={target_audience}
                                            onChange={(e) => setTargetAudience(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="interest_area"
                                            label="Áreas de interesse"
                                            name="interest_area"
                                            value={interest_area}
                                            onChange={(e) => setInterestArea(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* Sétima linha */}
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="material"
                                        label="Materiais necessários"
                                        name="material"
                                        value={material}
                                        onChange={(e) => setMaterial(e.target.value)}
                                    />
                                </Grid>
                                {/* Oitava linha */}
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="price"
                                            label="Preço"
                                            name="price"
                                            type="number"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="workload"
                                            label="Carga horária"
                                            name="workload"
                                            type="number"
                                            value={workload}
                                            onChange={(e) => setWorkload(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* Última linha */}
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="owner"
                                        label="Voluntário responsável"
                                        name="owner"
                                        type="number"
                                        value={owner}
                                        onChange={(e) => setOwner(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Cadastrar Evento
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}
