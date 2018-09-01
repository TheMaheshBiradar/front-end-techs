import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {data} from './data'
import BookList from './components/BookList';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
  <BookList books={data.books}/>, document.getElementById('root'));
registerServiceWorker();
