import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProviderComponent = ({
    children
}) => {

    const [auth, setAuth] = ;

    const navigate = useNavigate();
    const authService = authServiceFactory(auth.accessToken);

    const onRegisterSubmit = async (values) => {
        const {confirmPassword, ...registerData} = values;
      
        if (confirmPassword !== registerData.password) {
          //TODO - add error handling
          return;
        }
      
        try {
          const result = await authService.register(registerData)
          console.log('Log from registerSubmit', result);
      
          setAuth(result);
          navigate('/login');
        } catch (error) {
          console.log('Error from regiser submit', error);
        }
      };

const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  }
  
    return (
        <>
        <AuthContext>
            {children}
        </AuthContext>
        </>
    );

}