import { Routes, Route } from 'react-router-dom';

import {useState, useEffect} from 'react';

import * as propertyService from './services/propertyService';

import { CreateProperty } from "./components/CreateProperty/CreateProperty";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from "./components/Login/Login";
import { Catalog } from "./components/Properties/Catalog";
import { Register } from "./components/Register/Register";
import { PropertyDetails } from './components/PropertyDetails/PropertyDetails';

function App() {

const [properties, setProperties] = useState([]);

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
  } catch (error) {
    console.log('Error in login');
  }

}


  return (
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
  );
}

export default App;
