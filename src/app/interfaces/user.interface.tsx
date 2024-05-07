export interface UserInterface {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  isAdmin?: boolean;
  isActive?: boolean;
  createdAt?: string;
  img?: string;
  [key: string]: string | boolean | undefined;
}