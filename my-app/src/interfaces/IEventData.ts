export interface EventData {
  name: string; // required|string|max:100
  description: string; // required|string
  date: string; // required|date|after_or_equal:today
  time: string; // required|date_format:H:i
  modality: 'Presential' | 'Hybrid' | 'Remote'; // required|in:Presential,Hybrid,Remote
  status: 'active' | 'inactive' | 'pending' | 'finished'; // required|in:active,inactive,pending,finished
  type: 'course' | 'workshop' | 'lecture'; // required|in:course,workshop,lecture
  target_audience: string; // required|string|max:255
  vacancies: number; // required|integer|min:1
  social_vacancies?: number; // nullable|integer|min:0
  regular_vacancies?: number; // nullable|integer|min:0
  material?: string; // nullable|string|max:100
  interest_area: string; // required|string|max:100
  price: number; // required|numeric|min:0
  workload: number; // required|integer|min:1
  owner: number; // required|integer
}