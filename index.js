import React from 'react';
import { render } from 'react-dom';
import CompletePlayList from './src/components/playlist/complete-play-list';
import data from './src/api.json'

const app = document.getElementById('app');

render(<CompletePlayList categories = { data.categories } />,app);  