import React from "react";

import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

// Основной файл проекта, хранящий данные передаваемые в root
function App() {
  //отправка запроса на backend
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://635fe9e43e8f65f283bed842.mockapi.io/pizzas")
      .then((res) => res.json())
      .then((array) => {
        setItems(array);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
