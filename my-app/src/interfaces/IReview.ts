export interface User {
    id: number;
    name: string;
    email: string;
    permission: string;
  }
  
  export interface Review {
    id: number;
    user: User;
    rating: number;
    observation: string;
    feel_welcomed: boolean;
    recommendation: boolean;
  }
  
  export interface ReviewsResponse {
    status: boolean;
    reviews: {
      current_page: number;
      data: Review[];
      total: number;
    };
  }