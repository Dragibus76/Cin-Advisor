import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">CINADVISOR</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Acceuil</Link>
            <Link to="/">Contacter Nous</Link>
            <Link to="/">Conditions</Link>
            <Link to="/">A Propos de Nous</Link>
           
          </div>
          
          <div className="footer__content__menu">
            <Link to="/">F.A.Q</Link>
            <Link to="/">Connexion</Link>
            <Link to="/">Inscription</Link>
            <Link to="/">`CodeDragi{};`</Link>
          </div>
        
        
          <div className="footer__content__menu">
            <Link to="/">Vous Devez Voir</Link>
            <Link to="/">Médias Récents</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Footer