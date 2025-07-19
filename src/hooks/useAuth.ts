import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export interface AuthContextType {
  user: {
    name: string;
    email: string;
  } | null;
  login: (email: string, password: string) => Promise<string | null>;
  signup: (name: string, email: string, password: string) => Promise<string | null>;
  logout: () => void;
}


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
