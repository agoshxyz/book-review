// TASK 5 START
import { useState, useEffect } from 'react'
import { getBooks } from '../../api/books'
import { BookItem } from '../book-item/book-item'
const BookList = () => {
	const [books, setBooks] = useState([])
	useEffect(() => {
		getBooks().then((books) => setBooks(books))
	}, [books])
	return (
		<div>
			{books.map((book) => (
				<BookItem key={book.id} book={book} />
			))}
		</div>
	)
}

export default BookList
