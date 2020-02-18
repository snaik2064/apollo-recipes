import React from 'react';

import { useQuery } from '@apollo/react-hooks';

import './App.css';
import { GET_ALL_RECIPES } from '../queries';

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('data', data);
  return <p>Recipes</p>;
};

export default App;
