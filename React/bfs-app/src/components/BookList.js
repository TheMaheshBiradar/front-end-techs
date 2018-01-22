import React from 'react';
import Book from './Book';
class BookList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: 42,
      books: this.props.books
    };
  }

  render() {
    return ( <
      ul > {
        this.state.answer
      } {
        this.state.books.map((book, index) => {

          return <Book key = {
            book.id
          }
          book = {
            book
          }
          />

        })
      } <
      /ul>

    );

  }

}


export default BookList;
