import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

const root = document.getElementById('root');
ReactDom.render(<React.StrictMode><App /></React.StrictMode>, root);