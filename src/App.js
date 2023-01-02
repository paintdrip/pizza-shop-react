import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './components/Header';

import Home from './pages/Home';
import FullPagePizza from './pages/FullPagePizza';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

// Основной файл проекта, хранящий данные передаваемые в root
function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/pizza/:id' element={<FullPagePizza />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
