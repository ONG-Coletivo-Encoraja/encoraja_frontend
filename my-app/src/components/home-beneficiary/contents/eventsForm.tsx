// components/home-admin/contents/eventsForm.tsx
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
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventStatus, setEventStatus] = useState('');
    const [eventMode, setEventMode] = useState('');
    const [totalSlots, setTotalSlots] = useState('');
    const [socialSlots, setSocialSlots] = useState('');
    const [generalSlots, setGeneralSlots] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    const [requiredMaterials, setRequiredMaterials] = useState('');
    const [interestAreas, setInterestAreas] = useState('');
    const [price, setPrice] = useState('');
    const [workload, setWorkload] = useState('');
    const [responsibleVolunteer, setResponsibleVolunteer] = useState('');

    // Event handler for form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add logic to handle form submission
        console.log({
            eventName, eventDate, eventTime, eventDescription, eventType,
            eventStatus, eventMode, totalSlots, socialSlots, generalSlots,
            targetAudience, requiredMaterials, interestAreas, price, workload,
            responsibleVolunteer
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
                                        id="eventName"
                                        label="Nome do evento"
                                        name="eventName"
                                        autoComplete="event-name"
                                        autoFocus
                                        value={eventName}
                                        onChange={(e) => setEventName(e.target.value)}
                                    />
                                </Grid>
                                {/* Segunda linha */}
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="eventDate"
                                        label="Data do evento"
                                        name="eventDate"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={eventDate}
                                        onChange={(e) => setEventDate(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="eventTime"
                                        label="Horário do evento"
                                        name="eventTime"
                                        type="time"
                                        InputLabelProps={{ shrink: true }}
                                        value={eventTime}
                                        onChange={(e) => setEventTime(e.target.value)}
                                    />
                                </Grid>
                                {/* Terceira linha */}
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="eventDescription"
                                        label="Descrição do evento"
                                        name="eventDescription"
                                        multiline
                                        rows={3}
                                        value={eventDescription}
                                        onChange={(e) => setEventDescription(e.target.value)}
                                    />
                                </Grid>
                                {/* Quarta linha */}
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="eventType"
                                            label="Tipo de evento"
                                            name="eventType"
                                            select
                                            value={eventType}
                                            onChange={(e) => setEventType(e.target.value)}
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
                                            id="eventStatus"
                                            label="Status do evento"
                                            name="eventStatus"
                                            select
                                            value={eventStatus}
                                            onChange={(e) => setEventStatus(e.target.value)}
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
                                            id="eventMode"
                                            label="Modalidade do evento"
                                            name="eventMode"
                                            select
                                            value={eventMode}
                                            onChange={(e) => setEventMode(e.target.value)}
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
                                            id="totalSlots"
                                            label="Total de vagas"
                                            name="totalSlots"
                                            type="number"
                                            value={totalSlots}
                                            onChange={(e) => setTotalSlots(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="socialSlots"
                                            label="Vagas sociais"
                                            name="socialSlots"
                                            type="number"
                                            value={socialSlots}
                                            onChange={(e) => setSocialSlots(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="generalSlots"
                                            label="Vagas gerais"
                                            name="generalSlots"
                                            type="number"
                                            value={generalSlots}
                                            onChange={(e) => setGeneralSlots(e.target.value)}
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
                                            id="targetAudience"
                                            label="Público alvo"
                                            name="targetAudience"
                                            value={targetAudience}
                                            onChange={(e) => setTargetAudience(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="interestAreas"
                                            label="Áreas de interesse"
                                            name="interestAreas"
                                            value={interestAreas}
                                            onChange={(e) => setInterestAreas(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* Sétima linha */}
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="requiredMaterials"
                                        label="Materiais necessários"
                                        name="requiredMaterials"
                                        multiline
                                        rows={2}
                                        value={requiredMaterials}
                                        onChange={(e) => setRequiredMaterials(e.target.value)}
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
                                        id="responsibleVolunteer"
                                        label="Voluntário responsável"
                                        name="responsibleVolunteer"
                                        value={responsibleVolunteer}
                                        onChange={(e) => setResponsibleVolunteer(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: 'right' }} >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Criar evento
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}
