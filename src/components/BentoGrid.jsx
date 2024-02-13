import Gym from '../assets/img/gym.jpg'
import Hacking from '../assets/img/hacking.jpg'
import Futbol from '../assets/img/futbol.jpg'
import Hockey from '../assets/img/hockey.jpg'
export default function BentoGrid() {
  return (
    <div className="aficiones">
        <div className="div1 card" style={{backgroundImage : `url(${Gym})`}}>
          <h1 className="aficion">Gym</h1>
          <div className="hover-text">
            Voy al gym todas las tardes, ya que me ayuda a controlar el estrés.
          </div>
        </div>
        <div className="div2 card" style={{backgroundImage : `url(${Hacking})`}}>
          <h1 className="aficion">Hacking</h1>
          <div className="hover-text">
            Si, aunque parezca mentira, mi trabajo es también mi hobby, eso se
            llama tener suerte ¿verdad? ;-)
          </div>
        </div>
        <div className="div3 card" style={{backgroundImage : `url(${Futbol})`}}>
          <h1 className="aficion">Futbol</h1>
          <div className="hover-text">
            He practicado este deporte durante 14 años de mi vida, y aunque por
            lesiones que he tenido, siempre será de mis deportes preferidos
          </div>
        </div>
        <div className="div4 card" style={{backgroundImage : `url(${Hockey})`}}>
          <h1 className="aficion">Hockey</h1>
          <div className="hover-text">
            Sé patinar desde pequeño, pero nunca llegué a jugar al hockey hasta
            hace poco, desde luego deporte TOP.🔝
          </div>
        </div>
      </div>
  )
}
