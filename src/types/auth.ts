export interface User {
    email: string;
    password: string;
    name: string;
  }
  
  export interface AuthState {
    users: User[];
    currentUser: User | null;
  }