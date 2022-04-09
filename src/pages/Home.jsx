import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSlide/>
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Films Tendance</h2>
            <Link to="/movie">
              <OutlineButton className="small">Voir Plus</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Les Mieux Notés</h2>
            <Link to="/movie">
              <OutlineButton className="small">Voir Plus</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Séries Tendance</h2>
            <Link to="/tv">
              <OutlineButton className="small">Voir Plus</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Séries Les Mieux Notés</h2>
            <Link to="/tv">
              <OutlineButton className="small">Voir Plus</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home