import { Routes, Route, useNavigate } from 'react-router-dom';

import {useState, useEffect} from 'react';

import { AuthProviderComponent } from './contexts/AuthContext';
import { PropertyProvider } from './contexts/PropertyContext';

import { propertyServiceFactory } from './services/propertyService';
// import { authServiceFactory } from './services/authService';

import { CreateProperty } from "./components/CreateProperty/CreateProperty";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from "./components/Login/Login";
import { Catalog } from "./components/Properties/Catalog";
import { Register } from "./components/Register/Register";
import { PropertyDetails } from './components/PropertyDetails/PropertyDetails';
import { Logout } from './components/Logout/Logout';
import { EditProperty } from './components/EditProperty/EditProperty';

function App() {


// const authService = authServiceFactory(auth.accessToken);









  return (
    <AuthProviderComponent>
      <PropertyProvider>
    <div>
      <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/logout" element={ <Logout />} />
        <Route path="/create-property" element={ <CreateProperty />} />
        <Route path="/catalog" element={     <Catalog />} />
        <Route path="/catalog/:propertyId" element={ <PropertyDetails /> } />
        <Route path="/catalog/:propertyId/edit" element={ <EditProperty /> } />
      </Routes>
    </main>
      <Footer />
    </div>
    </PropertyProvider>
    </AuthProviderComponent>
  );
}

export default App;
