export function translateModalityEvent(modality: string): string {
    switch (modality) {
        case "presential":
            return 'Presencial';
        case "hybrid":
            return 'Híbrido';
        case "remote":
            return 'Remoto';
        default:
            return 'Modalidade desconhecida';
    }
}

export function translateStatusEvent(status: string): string {
    switch (status) {
        case "active":
            return 'Ativo';
        case "inactive":
            return 'Inativo';
        case "pending":
            return 'Pendente';
        case "finished":
            return 'Finalizado';
        default:
            return 'Status desconhecido';
    }
}

export function translateTypeEvent(type: string): string {
    switch (type) {
        case "course":
            return 'Curso';
        case "workshop":
            return 'Workshop';
        case "lecture":
            return 'Palestra';
        default:
            return 'Tipo desconhecido';
    }
}

export function translateStatusRequest(status: string): string {
    switch (status) {
        case "pending":
            return 'Pendente';
        case "accepted":
            return 'Aceito';
        case "rejected":
            return 'Rejeitado';
        default:
            return 'Status desconhecido';
    }
}

export function translateStatusInscription(status: string): string {
    switch (status) {
        case "pending":
            return 'Pendente';
        case "approved":
            return 'Aprovado';
        case "rejected":
            return 'Rejeitado';
        default:
            return 'Status desconhecido';
    }
}

export function translatePermission(permission: string): string {
    switch (permission) {
        case "administrator":
            return 'Administrador';
        case "volunteer":
            return 'Voluntário';
        case "beneficiary":
            return 'Beneficiário';
        default:
            return 'Permissão desconhecida';
    }
}

export function translateUserEthnicity(ethnicity: string): string {
    switch (ethnicity) {
        case "white":
            return 'Branca';
        case "black":
            return 'Preta';
        case "mixed":
            return 'Parda';
        case "asian":
            return 'Asiática';
        case "other":
            return 'Outro';
        default:
            return 'Etnia desconhecida';
    }
}

export function translateUserGender(gender: string): string {
    switch (gender) {
        case "female":
            return 'Feminino';
        case "male":
            return 'Masculino';
        case "prefer not say":
            return 'Prefiro não dizer';
        default:
            return 'Gênero desconhecido';
    }
}
