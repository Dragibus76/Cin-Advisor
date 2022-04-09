import React from 'react'

import { useParams } from 'react-router-dom';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';

const Catalog = () => {

  const { category } = useParams();

  console.log(category);
  return (
    <React.Fragment>
      <PageHeader>
        {category === cate.movie ? 'Films' : 'Series TV'}
      </PageHeader>
    </React.Fragment>
  )
}

export default Catalog