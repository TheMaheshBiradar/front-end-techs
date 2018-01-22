import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {data} from './data'
import registerServiceWorker from './registerServiceWorker';



const Book=({book})=>(
<li>{book.title} -- {book.price}  </li>
);


const BookList = (props) => (
  <ul>
    {props.books.map((book, index) => {

      return <Book key={book.id} book={book}/>


    })}
  </ul>
);

ReactDOM.render(
  <BookList books={data.books}/>, document.getElementById('root'));
registerServiceWorker();
