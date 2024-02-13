import Firefox from '../assets/img/firefox-icon.png'
import Chrome from '../assets/img/chrome.png'
import Safari from '../assets/img/safari.png'
import Android from '../assets/img/android.png'
import Opera from '../assets/img/Opera_256x256.png'
import HTML5 from '../assets/img/html5-badge-h-css3-graphics-multimedia-performance-semantics.png'
export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div id="menuFooter">
          <h5>MENÚ</h5>
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="/Proyectos.html">PROYECTOS</a></li>
            <li><a href="/Blog.html">BLOG</a></li>
            <li><a href="#">CONTACTO</a></li>
          </ul>
        </div>
        <div id="location">
          <h5>DÓNDE ESTAMOS?</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.2996623515555!2d-4.462811723546774!3d36.69133637227841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9c45623d2c3%3A0x7a634bd28c0cf953!2sMEDAC%20Nova%20%F0%9F%A5%87%20Centro%20Tecnol%C3%B3gico%20de%20FP!5e0!3m2!1ses!2ses!4v1698701252334!5m2!1ses!2ses"
            width="600"
            height="450"
            
            loading="lazy"
          ></iframe>
        </div>
        <div id="info">
          <h5>Desarrollado con</h5>
          <p>
            <img
              src={HTML5}
              alt="Creado con HTML y CSS"
            />
          </p>
          <h5>Optimizado para</h5>
          <p id="browsers">
            <a href="#">
              <img src={Firefox} alt="Firefox" />
            </a>
            <a href="#">
              <img src={Chrome} alt="Chrome" />
            </a>
            <a href="#">
              <img src={Safari} alt="Safari" />
            </a>
            <a href="#">
              <img src={Android} alt="Android" />
            </a>
            <a href="#">
              <img src={Opera} alt="Opera" />
            </a>
          </p>
          <h5>AUTOR</h5>
          <p>&copy; ALUMN@ - 2º WEB</p>
        </div>
      </div>
    </footer>
  )
}
