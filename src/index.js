import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

//Replace the redux provider with a react context provider
ReactDOM.hydrate(<App />, document.getElementById('root'));
