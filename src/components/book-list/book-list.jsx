// TASK 5 START
import { useState, useEffect } from 'react'
import { getBooks, deleteBook, createBook } from '../../api/books'
import { BookItem } from '../book-item/book-item'
import styles from './book-list.module.css'
const BookList = () => {
	const [books, setBooks] = useState([])
	const [selectedAuthor, setSelectedAuthor] = useState('All')
	const [name, setName] = useState('')
	const [author, setAuthor] = useState('')
	const [stars, setStars] = useState()

	useEffect(() => {
		getBooks().then((books) => setBooks(books))
	}, [getBooks])

	let authors = [...new Set(books.map((book) => book.author))]
	authors = ['All', ...authors]
	let displayedBooks =
		selectedAuthor === 'All' ? books : books.filter((book) => book.author === selectedAuthor)

	const handleDeleteBook = (id) => {
		deleteBook(id)
			.then(() => {
				setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id))
			})
			.catch((err) => {
				console.error(`Failed to delete book: ${err}`)
			})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const newBook = {
			id: Math.floor(Math.random() * 10000),
			name,
			author,
			stars,
		}
		setBooks((prevBooks) => [...prevBooks, newBook])
		setName('')
		setAuthor('')
		setStars(0)
		createBook(newBook)
	}
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
					<form onSubmit={handleSubmit} className={styles.newBook}>
						<input
							className={styles.newBookInput}
							type='text'
							placeholder='Book name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<input
							className={styles.newBookInput}
							type='text'
							placeholder='Author name'
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							required
						/>
						<input
							className={styles.newBookInput}
							type='number'
							placeholder='0'
							value={stars}
							onChange={(e) => setStars(e.target.value)}
							required
						/>
						<button type='submit'>Add new book</button>
					</form>
				</div>
			</div>
			<div className={styles.booksContainer}>
				{displayedBooks.length > 0 ? (
					displayedBooks.map((book) => (
						<BookItem key={book.id} book={book} onDelete={handleDeleteBook} />
					))
				) : (
					<h1>No books</h1>
				)}
			</div>
		</>
	)
}

export default BookList
