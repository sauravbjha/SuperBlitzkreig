import Container from './container';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-4 text-center">
          Created with love @ {currentYear}
        </div>
      </Container>
    </footer>
  );
}
