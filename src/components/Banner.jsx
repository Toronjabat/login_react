import React from 'react'

import cafe from '../assets/cafe.png'
import payoneer from '../assets/payoneer.png'
import macro from '../assets/macro.png'

export const Banner = () => {

    return(

        <div className="container" style={{marginBlockStart: 32}}>
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <a href="https://cafecito.app/fb1994">
 <img className="d-block w-100" src={cafe} alt="No encontrada"/>
</a>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={payoneer} alt="No encontrada"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={macro} alt="No encontrada"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Anterior</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Siguiente</span>
  </a>
</div>

        </div>
    )

}