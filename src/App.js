import logo from './logo.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Index from './layouts/index'
import { CommentLayout } from './layouts/comments'
import Comment from './components/Comment/Comment'
import { Comments } from './components/Comment/Comments'

function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	)
}

function App() {
	return (
		<Routes>
			{/* <Route path="/" element={<Home />} /> */}
			<Route path="/" element={<Index />}>
				<Route index element={<Comment />} />
				{/* <Route path="comments" element={<Comments />} /> */}
			</Route>
			<Route path="/comments" element={<CommentLayout />}>
				<Route index element={<Comments />} />
			</Route>
			{/* <Redirect to="/" /> */}
		</Routes>
	)
}

export default App
