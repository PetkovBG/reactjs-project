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
import { Logout } from './components/Logout/Logout';

function App() {

  const navigate = useNavigate();

const [properties, setProperties] = useState([]);

const [auth, setAuth] = useState({});

const propertyService = propertyServiceFactory(auth.accessToken);
const authService = authServiceFactory(auth.accessToken);

useEffect(() => {
  propertyService.getAll()
  .then(result => {
    // console.log(result)
    setProperties(result)
  })
}, []);

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

const onCreateSubmit = async (data) => {
  const newProperty = await propertyService.create(data);

  // console.log('New prop');
  // console.log(newProperty);

  setProperties(state => [...state, newProperty]);

  navigate('/catalog');
};

const onLogout = async () => {
  //TODO authorize request

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
    <AuthContext.Provider value={contextValues}>
    <div>
      <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/logout" element={ <Logout />} />
        <Route path="/catalog" element={     <Catalog properties={properties} />} />
        <Route path="/catalog/:propertyId" element={ <PropertyDetails /> } />
        <Route path="/create-property" element={ <CreateProperty onCreateSubmit={onCreateSubmit} />} />
      </Routes>
    </main>
      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
