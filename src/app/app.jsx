import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { AppRouter } from './app-router'
import './app.css'

function App() {
	return (
		<>
			<Header />

			<div style={{ height: '90vh', padding: '15px' }}>
				{/* TASK 3 TIP: use AppRouter component here */}
				<AppRouter />
			</div>

			<Footer />
		</>
	)
}

export default App
