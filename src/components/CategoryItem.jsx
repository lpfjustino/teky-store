import React from 'react'
import PropTypes from 'prop-types'

function CategoryItem(props) {
    return (
        <div>
            <div><img src={props.icon} /></div>
            <div>{props.text}</div>
        </div>
    )
}

CategoryItem.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CategoryItem

