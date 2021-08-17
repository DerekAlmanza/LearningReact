import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import CounterApp from './CounterAppComp';

const root = document.getElementById('root');

ReactDOM.render(< CounterApp value={ 0 }/>, root)

