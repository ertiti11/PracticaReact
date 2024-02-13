import React from 'react'
import SobreMiImg from '../assets/img/undraw_developer_activity_re_39tg.svg'

export default function SobreMi() {
  return (
    <div className="sobremi">
        <div className="sobremiContainer container1">
          <h1 id="tituloSobremi">
            Hola, Soy Adrian Prieto
            <span className="emoji"
              ><img
                src={"https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"}
                alt=""
            /></span>
          </h1>
          <p className="textoHeader">
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web and Mobile applications with JavaScript / Reactjs /
            Nodejs / React Native and some other cool libraries and frameworks.
          </p>
        </div>
        <div className="sobremiContainer container2">
          <img
            id="imagensobremi"
            src={SobreMiImg}
            alt=""
          />
        </div>
      </div>
  )
}
