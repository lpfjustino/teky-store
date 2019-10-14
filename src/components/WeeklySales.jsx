import React from 'react';
import ProductsList from './products/ProductsList';

function WeeklySales(props) {
  const weekSales = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="weekly-sales">
      <div className="header">OFERTAS DA SEMANA</div>
      <ProductsList products={weekSales} />
      <button className="primary-btn">VER MAIS OFERTAS</button>
    </div>
  );
}

WeeklySales.propTypes = {};

export default WeeklySales;
