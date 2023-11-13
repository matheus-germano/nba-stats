export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full h-[60px] bg-zinc-100 border-t-[1px] border-zinc-300 flex items-center justify-center'>
      <p className='text-zinc-700'>&copy; {currentYear} Matheus Germano da Costa. Todos os direitos Reservados</p>
    </footer>
  );
}