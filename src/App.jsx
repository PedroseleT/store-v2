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
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<Product />} />
          </Routes>
        </main>

        {/* ESTE É O LUGAR CERTO: 
           Fora do <Routes> para aparecer em todas as páginas,
           e antes do <Footer /> para ficar acima dos créditos.
        */}
        <div className="max-w-6xl mx-auto w-full px-6 mb-10">
          <ReviewSystem productId="geral" />
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;