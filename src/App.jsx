import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ReviewSystem from "./components/ReviewSystem";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* # ALTERAÇÃO SOLICITADA: ReviewSystem encapsulado na rota principal para aparecer apenas na Home */}
            <Route path="/" element={
              <>
                <Home />
                <div className="max-w-6xl mx-auto w-full px-6 mb-10">
                  <ReviewSystem productId="geral" />
                </div>
              </>
            } />
            <Route path="/produto/:id" element={<Product />} />
          </Routes>
        </main>

        {/* ESTE É O SEGREDO: 
           Colocamos o ReviewSystem FORA do <Routes>. 
           Assim, ele aparece na Home e em qualquer outra página, 
           sempre antes do Footer de créditos.
        */}
        {/* # ALTERAÇÃO SOLICITADA: Chamada global do ReviewSystem removida daqui */}
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;