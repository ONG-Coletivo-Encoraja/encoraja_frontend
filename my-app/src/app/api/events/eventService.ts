import API from "@/services/api";
import { ApiResponse, Event } from "@/interfaces/IEventData";
import { useSession } from "next-auth/react";
import { Review } from "@/interfaces/IReview";
import { Dispatch, SetStateAction } from "react";

export const fetchEvents = async (
  statusFilter?: string,
  nameFilter?: string,
  token?: string,
  currentPage: number = 1,
  itemsPerPage: number = 2
): Promise<ApiResponse> => {
  const params: Record<string, string> = {
    page: currentPage.toString(),
    per_page: itemsPerPage.toString(),
  };

  if (statusFilter) params.status = statusFilter;
  if (nameFilter) params.name = nameFilter;

  const response = await API.get<ApiResponse>('/beneficiary/events', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    params,
  });

  const { events } = response.data;

  return {
    status: response.data.status,
    events: {
      current_page: events.current_page,
      data: events.data,
      first_page_url: events.first_page_url,
      from: events.from,
      last_page: events.last_page,
      last_page_url: events.last_page_url,
      links: events.links,
      next_page_url: events.next_page_url,
      path: events.path,
      per_page: events.per_page,
      prev_page_url: events.prev_page_url,
      to: events.to,
      total: events.total,
    },
  };
};

export const fetchEventById = async (eventId: string, token?: string): Promise<Event> => {
  const response = await API.get(`/users/events/${eventId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }});

  return response.data.event;
};

export const useEventsDetailsFunctions = (eventId: string, setEvent: Dispatch<SetStateAction<Event | null>>, setReviews: Dispatch<SetStateAction<Review[]>>, setLoading: Dispatch<SetStateAction<boolean>>) => {
  const { data: session } = useSession();

  const fetchData = async () => {
    if (eventId && session?.token) {
      try {
        const eventData = await fetchEventById(eventId, session.token);
        setEvent(eventData);
        
        const reviewResponse = await API.get(`/reviews/${eventId}`, {
          headers: { Authorization: `Bearer ${session.token}` },
        });
        setReviews(reviewResponse.data.reviews.data);
      } catch (error) {
        console.error("Erro ao buscar evento:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleReviewClick = (review: Review, setSelectedReview: Dispatch<SetStateAction<Review | null>>, setDialogOpen: Dispatch<SetStateAction<boolean>>) => {
    setSelectedReview(review);
    setDialogOpen(true);
  };

  return { fetchData, handleReviewClick };
};