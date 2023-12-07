import React from 'react'
import {Link} from 'react-router-dom';
import { Portfolio } from './Portfolio';


export const Home = () => {
  return (
    <div className='home-page'>
      <h2>Hola,</h2>

      <h1> 
        mi nombre es <strong className='span-black-color'>Jorge Gamboa</strong> y soy <strong className='span-black-color'>desarrollador web.</strong> 
      </h1>

      <p className='text-centered'>
      Ofrezco servicios de programación y desarrollo en todo tipo de proyectos web.
      </p>

      <h2>Te ayudo a transformar tus ideas en una aplicación web.</h2>

      <div className="home-page-links">
      <Link to='/Contact'>Puedes contactarme acá</Link> 
      <Link to='/Portfolio'>Ver proyectos</Link>
      </div>
      {/* <Portfolio /> */}
    </div>
  )
}
