import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPagePizza: React.FunctionComponent = () => {
	const [pizza, setPizza] = React.useState<{
		imageUrl: string;
		title: string;
		price: number;
		description: string;
	}>();

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
		return <>Загрузка...</>;
	}

	return (
		<div className='container container--pizz'>
			<div>
				<img src={pizza.imageUrl} />
			</div>
			<div>
				<h2>{pizza.title}</h2>
				<h4>{pizza.price} ₽</h4>
				<h4>{pizza.description}</h4>
			</div>
		</div>
	);
};

export default FullPagePizza;
