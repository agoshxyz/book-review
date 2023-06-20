import axios from 'axios'
import { BASE_API } from '../constants/constants'
const booksAPI = axios.create({
	baseURL: BASE_API,
})

export const getBooks = async () => {
	return new Promise((resolve, reject) => {
		booksAPI
			.get('/books')
			.then((res) => {
				resolve(res.data)
			})
			.catch((err) => {
				reject(err)
			})
	})
}

export const deleteBook = async (id) => {
	return new Promise((resolve, reject) => {
		booksAPI
			.delete(`/books/${id}`)
			.then((res) => {
				resolve(res.data)
			})
			.catch((err) => {
				reject(err)
			})
	})
}

export const createBook = async (book) => {
	return new Promise((resolve, reject) => {
		booksAPI
			.post('/books', book)
			.then((res) => {
				resolve(res.data)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
