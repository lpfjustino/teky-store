import React from 'react';
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap';

function SponsorHeader({ index }) {
    return <div className="sponsor-header">
        <span>DESTAQUE |</span>
        <span className="index">{ index }</span>
    </div>;
}

function MultiItemSponsor({ items, index }) {
    return (
        <div className="slider-container sponsor-slider sponsored-item sponsored-item-multi">
            <SponsorHeader index={index} />
            <Carousel slide={false}>
                { items && items.map(item =>
                    (<Carousel.Item>
                        <span className="item-header">{ item.header }</span>
                        <span className="item-content">{ item.content }</span>
                    </Carousel.Item>)
                )}
            </Carousel>
        </div>
    );
};

function SingleItemSponsor({ item, index }) {
    return item && 
    <div className="sponsored-item sponsored-item sponsored-item-single">
        <SponsorHeader index={index} />
        <div className="item-description">
            <span className="item-header">{ item.header }</span>
            <span className="item-content">{ item.content }</span>
        </div>
    </div> || null;
}

function SponsoredProducts(props) {
    return (
        <div className="sponsored-products">
            <div className="header">PRODUTOS EM DESTAQUE</div>
            <div className="products-list">
            {
                props.items.map(item => item.multi
                    ? <MultiItemSponsor items={item.products} index={item.index}/>
                    : <SingleItemSponsor item={item} index={item.index}/>
                    )
                }
            </div>
        </div>
    )
}

SponsoredProducts.propTypes = {
    items: PropTypes.array.isRequired,
}

export default SponsoredProducts

