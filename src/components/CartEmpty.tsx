import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FunctionComponent = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не выбрали ни одного товара.
          <br />
          Для заказа пиццы, перейдите на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
