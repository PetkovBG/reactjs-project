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
      <Login />
      <Register />
      <Catalog />
    </main>
      <Footer />
    </div>
  );
}

export default App;
