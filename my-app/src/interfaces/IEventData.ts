export interface EventData {
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
  price: number;
  workload: number;
  owner: number
}

export interface UserOwner {
  name: string;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  modality: string;
  status: string;
  type: string;
  material: string,
  price: string,
  user_owner: UserOwner;
}

export interface ApiResponse {
  status: boolean;
  events: {
    current_page: number;
    data: Event[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}