import { Routes, Route, useNavigate } from 'react-router-dom';

import {useState, useEffect} from 'react';

import { AuthContext } from './contexts/authContext';

import { propertyServiceFactory } from './services/propertyService';
import { authServiceFactory } from './services/authService';

import { CreateProperty } from "./components/CreateProperty/CreateProperty";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from "./components/Login/Login";
import { Catalog } from "./components/Properties/Catalog";
import { Register } from "./components/Register/Register";
import { PropertyDetails } from './components/PropertyDetails/PropertyDetails';

function App() {

  const navigate = useNavigate();

const [properties, setProperties] = useState([]);

const [auth, setAuth] = useState({});

const propertyService = propertyServiceFactory();
const authService = authServiceFactory();

useEffect(() => {
  propertyService.getAll()
  .then(result => {
    console.log(result)
    setProperties(result)
  })
}, []);

const onLoginSubmit = async (data) => {

  try {
    const result = await authService.login(data);
    // console.log(result);
    setAuth(result);
    navigate('/');
  } catch (error) {
    console.log('Error in login');
  }

};

const contextValues = {
  onLoginSubmit,
}


  return (
    <AuthContext.Provider value={contextValues}>
    <div>
      <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/catalog" element={     <Catalog properties={properties} />} />
        <Route path="/catalog/:propertyId" element={ <PropertyDetails /> } />
        <Route path="/create-property" element={ <CreateProperty />} />
      </Routes>
    </main>
      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
