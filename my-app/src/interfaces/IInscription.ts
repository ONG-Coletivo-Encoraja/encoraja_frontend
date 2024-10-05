import { Event, UserOwner } from "./IEventData";

export interface Inscription {
    id: number;
    user: UserOwner;
    event: Event;
    status: string;
    present: number;
}

export interface InscriptionsResponse {
    status: boolean;
    inscriptions: {
        current_page: number;
        data: Inscription[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: Array<{ url: string | null; label: string; active: boolean }>;
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
}