import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer"; // 1. Importe o Footer
// No seu App.jsx
import ReviewSystem from "./components/ReviewSystem"; // Importe aqui

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<Product />} />
          </Routes>
        </main>

        {/* COLOCANDO AQUI ELE APARECE EM TUDO! */}
        <ReviewSystem productId="geral" /> 
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* 2. Envolvi tudo em uma div para empurrar o footer para baixo */}
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<Product />} />
          </Routes>
        </main>

        <Footer /> {/* 3. Adicione o Footer aqui */}
      </div>
    </BrowserRouter>
  );
}

export default App;