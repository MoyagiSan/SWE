import React from 'react'
import { books } from '../../data';

const getFilteredBooks = (search, available) => {
  let booklist = []

  if (typeof search === "undefined" || search === "") {
    booklist = books
  } else {
    booklist = books.filter(book => book.autor.includes(search) || book.titel.includes(search) || book.isbn === search)
  }

  if (available === false) {
    return booklist
  }
  
  return booklist.filter(book => book.lieferbar === true)
}

const Bücher = props => {
  const search = props.suchwort
  const available = props.checkb
  const booklist = getFilteredBooks(search, available)

  const htmlBookList = booklist.map(book =>
    { 
      return (
        <ul key={book.isbn}>
          <li className="btitel">
            {book.autor}: {book.titel} {book.preis} Euro
          </li>
        </ul>
      )
    }
  );

  return (
    <div className="mx-auto">
      {htmlBookList}
    </div>
  )
}

export default Bücher