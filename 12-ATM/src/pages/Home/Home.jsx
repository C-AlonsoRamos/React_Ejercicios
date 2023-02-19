import './Home.css';

import React from 'react';

const Home = () => {
  return (
    <main>
      <div className="atm-decorator">
        <img
          src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676750026/Atm/eE1b-LXrzb_hazte_socio_modulo_tku1v8.jpg"
          alt="hazte socio"
        />
        <img
          src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676750048/Atm/ouqgg59ncJ_ENTRADAS_sumbjg.png"
          alt="entradas"
        />
        <img
          src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676750057/Atm/lcwiH3twBB_TA_kd9bgs.jpg"
          alt="territorio atm"
        />
        <img
          src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676750070/Atm/xKplQLwjOU_Untitleddesign_57_nrjmbw.png"
          alt="tiendas"
        />
      </div>
      <div className="atm-hero"></div>

      <div className="atm-notice">
        <div className="atm-article">
          <img
            src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676750295/Atm/7pDOAo6ID8_15_10_2022_athletic_atletico_morata2_ifx4hv.jpg"
            alt="morata"
          />
          <h1>Duelo liguero entre equipos que comparten historia</h1>
          <p>
            Atlético de Madrid y Athletic Club se enfrentan este domingo en el partido
            correspondiente a la jornada 22 de LaLiga. Un duelo que rendirá homenaje a los
            125 años de historia del club vasco.
          </p>
        </div>
        <div className="atm-article">
          <img
            src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676750159/Atm/LS6M58CvjC__L2I7536_aj2v6f.jpg"
            alt="entrenamiento atm"
          />
          <h1>Última sesión de entrenamiento antes del Atleti-Athletic</h1>
          <p>
            El equipo ya está preparado para un nuevo reto en LaLiga.Nuestro equipo recibe
            la visita del conjunto vasco en el Cívitas Metropolitano a partir de las 18:30
            horas de este domingo 19 de febrero.
          </p>
        </div>
        <div className="atm-article">
          <img
            src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676750099/Atm/gbXZz1H1ys_AAFF_ABONO_640_jgcknw.jpg"
            alt="futre"
          />
          <h1>Homenajeamos la figura de nuestra leyenda Paulo Futre</h1>
          <p>
            El jueves 23 de febrero, desde las 17:30 horas, rendiremos tributo a nuestra
            leyenda portuguesa en la temporada en la cual se cumple el 35 aniversario de
            su debut como rojiblanco.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
