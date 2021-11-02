import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router";
import axios from "axios";

interface User {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  signIn: (userData: User) => void;
  Logout: () => void;
  authToken: string;
  data: any;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();
  const [data, setData] = useState({});

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData: User) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", userData)
      .then((response) => {
        setData(response.data);

        localStorage.setItem("token", response.data.token);

        setAuthToken(response.data.token);

        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const Logout = () => {
    localStorage.clear();

    setAuthToken("");

    history.push("/login");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn, data }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
