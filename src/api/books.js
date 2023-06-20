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
