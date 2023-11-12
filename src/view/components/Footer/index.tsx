export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full h-[60px] border-t-[1px] border-nba-blue flex items-center justify-center'>
      <p className='text-nba-blue'>&copy; {currentYear} Matheus Germano da Costa. Todos os direitos Reservados</p>
    </footer>
  );
}