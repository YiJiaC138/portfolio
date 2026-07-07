export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-section flex flex-col items-center justify-between gap-3 text-small text-text-secondary md:flex-row">
        <p>© {new Date().getFullYear()} Yi Jia Chiew</p>
        <p>Built with React + TypeScript + TailwindCSS</p>
      </div>
    </footer>
  );
}
