import React from 'react';

type CategoriesProps = {
	value: number;
	onChangeCategory: any;
};

const Categories: React.FunctionComponent<CategoriesProps> = ({ value, onChangeCategory }) => {
	const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className='categories'>
			<ul>
				{categories.map((categoryName, i) => (
					<li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
