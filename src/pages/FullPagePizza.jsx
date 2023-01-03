import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPagePizza = () => {
	const [pizza, setPizza] = React.useState();
	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					'https://635fe9e43e8f65f283bed842.mockapi.io/pizzas/' + id,
				);
				setPizza(data);
			} catch (error) {
				alert('Ошибка при получении данных о пицце');
				navigate('/');
			}
		}

		fetchPizza();
	}, []);

	if (!pizza) {
		return 'Загрузка...';
	}

	return (
		<div className='container'>
			<img src={pizza.imageUrl} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} ₽</h4>
		</div>
	);
};

export default FullPagePizza;
