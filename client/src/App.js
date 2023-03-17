import { Routes, Route } from 'react-router-dom';

import { CreateProperty } from "./components/CreateProperty/CreateProperty";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Catalog } from "./components/Properties/Catalog";
import { Register } from "./components/Register/Register";

function App() {
  return (
    <div>
      <Header />
    <main>
      <Routes>
        <Route path="/" element={<h1>Hello from home</h1>} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/catalog" element={     <Catalog />} />
        <Route path="/create-property" element={ <CreateProperty />} />
      </Routes>
    </main>
      <Footer />
    </div>
  );
}

export default App;
