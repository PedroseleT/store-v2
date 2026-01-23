export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white mt-auto">
      <div className="max-w-full mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Lado Esquerdo: Copyright */}
        <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
          © {currentYear} Todos os direitos reservados.
        </p>

        {/* Direita: Créditos */}
        <p className="text-[10px] text-gray-500">
          Developed by <span className="font-bold text-black border-b border-black">Pedro Teles</span>
        </p>

      </div>
    </footer>
  );
}