import ReactDom from 'react-dom';
import React from 'react';
//import App from './App';
import FirstApp from './FirstApp';
import './index.css';

const root = document.getElementById('root');
const greeting = 'Branimir';
ReactDom.render(<FirstApp greeting={greeting}/>, root);
//ReactDom.render(<React.StrictMode><FirstApp greeting='Branimir' /></React.StrictMode>, root);
//ReactDom.render(<React.StrictMode><App /></React.StrictMode>, root);