import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Header } from "./components/Header";

// No topo do App.jsx
import { Footer } from "./components/Footer";

// No final do seu return, antes de fechar a última </div> ou <>
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Rotas /> {/* Suas rotas aqui */}
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
