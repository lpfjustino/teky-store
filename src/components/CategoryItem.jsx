import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function CategoryItem(props) {
  return (
    <div className="category-item">
      <NavLink to="/products">
        <div className="logo-container">
          <img className="logo" src={props.icon} alt={props.text} />
        </div>
        <div className="item-label">{props.text}</div>
      </NavLink>
    </div>
  );
}

CategoryItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryItem;
