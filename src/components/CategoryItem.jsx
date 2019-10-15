import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function CategoryItem(props) {
  return (
    <div className="category-item">
      <NavLink to="/products">
        <div className="logo-container dropdown" >
          <img className="logo" src={props.icon} alt={props.text} />
          <div className="item-label">{props.text}</div>
          <Dropdown>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <div className="dropdown-item">Subcategory 1</div>
              <div className="dropdown-item">Subcategory 2</div>
              <div className="dropdown-item">Subcategory 3</div>
            </div>
          </Dropdown>
        </div>
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
