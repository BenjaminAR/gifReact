import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';

const divRoot= document.querySelector('#root');

//ReactDOM.render(  <PrimerApp saludo={ 'Hola mundo' } />,  divRoot );

ReactDOM.render(  <GifExpertApp/>,  divRoot );