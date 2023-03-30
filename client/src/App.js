import { Routes, Route, useNavigate } from 'react-router-dom';

import {useState, useEffect} from 'react';

import { AuthProviderComponent } from './contexts/AuthContext';

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

  const navigate = useNavigate();

const [properties, setProperties] = useState([]);


const propertyService = propertyServiceFactory();
// const authService = authServiceFactory(auth.accessToken);

useEffect(() => {
  propertyService.getAll()
  .then(result => {
    // console.log(result)
    setProperties(result)
  })
}, []);





const onCreateSubmit = async (data) => {
  const newProperty = await propertyService.create(data);

  // console.log('New prop');
  // console.log(newProperty);

  setProperties(state => [...state, newProperty]);

  navigate('/catalog');
};

const onPropertyEditSubmit = async (values) => {
  const result = await propertyService.edit(values._id, values);
  console.log('Property Edit', result);
  setProperties(state => state.map(x => x._id === values._id ? result : x));
  navigate(`/catalog/${values._id}`);
}



  return (
    <AuthProviderComponent>
    <div>
      <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/logout" element={ <Logout />} />
        <Route path="/create-property" element={ <CreateProperty onCreateSubmit={onCreateSubmit} />} />
        <Route path="/catalog" element={     <Catalog properties={properties} />} />
        <Route path="/catalog/:propertyId" element={ <PropertyDetails /> } />
        <Route path="/catalog/:propertyId/edit" element={ <EditProperty onPropertyEditSubmit={onPropertyEditSubmit}/> } />
      </Routes>
    </main>
      <Footer />
    </div>
    </AuthProviderComponent>
  );
}

export default App;
