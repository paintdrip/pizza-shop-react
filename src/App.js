import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './components/Header';

import Home from './pages/Home';
import FullPagePizza from './pages/FullPagePizza';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import MainLayout from './layouts/MainLayout';

// Основной файл проекта, хранящий данные передаваемые в root
function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='pizza/:id' element={<FullPagePizza />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
