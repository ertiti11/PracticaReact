
export default function BlogNavbar() {
  return (
    <div className="container sticky-lg-top w-100">
      <header id="header-nav" className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="/index.html"
              className="nav-link active boton"
              aria-current="page"
              >Home</a
            >
          </li>
          <li className="nav-item">
            <a href="/Blog.html" className="nav-link">Blog</a>
          </li>
          <li className="nav-item"><a href="#" className="nav-link">Contacto</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Preguntas</a></li>
          <li className="nav-item">
            <a href="/Proyectos.html" className="nav-link">proyectos</a>
          </li>
        </ul>
      </header>
    </div>
  )
}
