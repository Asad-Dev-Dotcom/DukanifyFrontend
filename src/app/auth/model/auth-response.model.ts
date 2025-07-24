export interface AuthResponse {
  user: {
    name: string;
    email: string;
    picture?: string;
  };
  token: string;
}