import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";


export const AuthContext = createContext();

export const AuthProviderComponent = ({
  children
}) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useLocalStorage('auth', {});
  const authService = authServiceFactory(auth.accessToken);

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;

    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData)

      setAuth(result);
      navigate('/catalog');
    } catch (error) {
      console.log('Error from regiser submit', error);
    }
  };

  const onLoginSubmit = async (data, onErrorSubmit) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate('/');
    } catch (error) {
      onErrorSubmit();
      console.log('Error in login');
    }
  };

  const onLogout = async () => {

    await authService.logout();
    setAuth({});
  }

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
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );

}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
}