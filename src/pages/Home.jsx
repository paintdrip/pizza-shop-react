import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
  //отправка запроса на backend
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://635fe9e43e8f65f283bed842.mockapi.io/pizzas?category=" +
        categoryId
    )
      .then((res) => res.json())
      .then((array) => {
        setItems(array);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
