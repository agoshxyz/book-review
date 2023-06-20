// TASK 5 START
import { useState, useEffect } from 'react'
import { getBooks } from '../../api/books'
import { BookItem } from '../book-item/book-item'
import styles from './book-list.module.css'
const BookList = () => {
	const [books, setBooks] = useState([])
	const [selectedAuthor, setSelectedAuthor] = useState('All')

	useEffect(() => {
		getBooks().then((books) => setBooks(books))
	}, [])

	let authors = [...new Set(books.map((book) => book.author))]
	authors = ['All', ...authors]
	let displayedBooks =
		selectedAuthor === 'All' ? books : books.filter((book) => book.author === selectedAuthor)

	return (
		<>
			<div className={styles.filterContainer}>
				<div className={styles.filerArea}>
					<p className={styles.filterMessage}>
						{selectedAuthor === 'All'
							? 'Showing all books'
							: `Showing books written by ${selectedAuthor}`}
					</p>
					<div className={styles.filterButtons}>
						{authors.map((author) => (
							<div className={styles.filerButton} key={author}>
								<button
									onClick={() =>
										setSelectedAuthor((prevAuthor) => (prevAuthor === author ? 'All' : author))
									}
									className={selectedAuthor === author ? styles.selectedAuthor : ''}>
									{author}
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.booksContainer}>
				{displayedBooks.length > 0 ? (
					displayedBooks.map((book) => <BookItem key={book.id} book={book} />)
				) : (
					<h1>No books</h1>
				)}
			</div>
		</>
	)
}

export default BookList
