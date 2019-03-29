import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from "./note";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Note />, document.getElementById('root'));

serviceWorker.unregister();
