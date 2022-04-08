import React from 'react'
import { OutlineButton } from '../components/button/Button';
import { Link } from 'react-router-dom'
import HeroSlide from '../components/hero-slide/HeroSlide';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSlide/>
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Tendance</h2>
            <Link>
              <OutlineButton className="small">Voir Plus</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home