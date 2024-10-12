interface IUser {
    id: number;
    name: string;
    email: string;
    permission: string;
}

interface IEvent {
    id: number;
    name: string;
    description: string; 
    date: string;
    time: string;
    modality: string; 
    status: string; 
    type: string; 
    target_audience: string; 
    vacancies: number; 
    social_vacancies: number; 
    regular_vacancies: number; 
    material: string; 
    interest_area: string; 
    price: string; 
    workload: number; 
    user_owner: IUser; 
}

export interface IRelatesEvent {
    id: number;
    event: IEvent;
    user: IUser;
}

export interface IReportAdmin {
    id: number;
    event_id: number;
    qtt_person: number; 
    description: string; 
    results: string; 
    observation: string; 
}
