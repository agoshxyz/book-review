// TASK 3 START
// TASK 3 TIP: Import the page components

import { Routes, Route } from 'react-router-dom'

import PageHome from '../pages/page-home'
import PageAbout from '../pages/page-about'
import PageBooks from '../pages/page-books'

export function AppRouter() {
	return (
		<>
			{/* TASK 3 TIP: Define here the routes for your pages using "react-router-dom" package */}
			<Routes>
				<Route path='/home' element={<PageHome />} />
				<Route path='/about' element={<PageAbout />} />
				<Route path='/books' element={<PageBooks />} />
			</Routes>
		</>
	)
}
