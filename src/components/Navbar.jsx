export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Gabriel Ferrales, home">GF<span aria-hidden="true">.</span></a>
        <ul><li><a href="#work">Work</a></li><li><a href="#about">About</a></li><li><a href="#contact">Contact <span aria-hidden="true">↗</span></a></li></ul>
      </nav>
    </header>
  );
}
