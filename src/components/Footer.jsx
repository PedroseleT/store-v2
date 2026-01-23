export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-full mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Lado Esquerdo: Copyright */}
        <p className="text-sm text-gray-500 font-medium">
          © {currentYear} Sua Loja. Todos os direitos reservados.
        </p>

        {/* Centro/Direita: Seu Nome */}
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          Desenvolvido por <span className="text-black font-bold">Pedro Teles</span>
        </p>

      </div>
    </footer>
  );
}