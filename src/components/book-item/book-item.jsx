// TASK 6 START
import { useState } from 'react'
import styles from './book-item.module.css'
export const BookItem = ({ book, onDelete }) => {
	const [isStarsHidden, setIsStarsHidden] = useState(true)
	const toggleStars = () => {
		setIsStarsHidden(!isStarsHidden)
	}
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.bookName}>
				<strong>name: </strong>
				{book.name}
			</h3>

			<p className={styles.bookAuthor}>
				<strong>author: </strong>
				{book.author}
			</p>

			{/* TASK 6 TIP: stars should be displayed conditionally */}
			<p>{!isStarsHidden && <strong>stars: {book.stars}</strong>}</p>
			<button onClick={() => onDelete(book.id)}>Delete</button>
			<button onClick={toggleStars}>{isStarsHidden ? 'show stars' : 'hide stars'}</button>
		</div>
	)
}
