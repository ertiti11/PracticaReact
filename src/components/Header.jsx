import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <header id="header">
      <div id="logo">
        <span className="gear">S</span>
        <h3>BLOG</h3>
      </div>
      <nav id="menu">
        <ul>
          <li>
            <Link to={"/"}>INICIO</Link>
          </li>
          <li>
            <Link to={"/Proyectos"}>PROYECTOS</Link>
          </li>
          <li>
            <Link to={"/blog"}>BLOG</Link>
          </li>
          <li>
            <Link to={"/"}>FORMACIÓN</Link>
          </li>
          <li>
            <Link to={"/"}>CONTACTO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
