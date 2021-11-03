import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from './Button'

/* import numberWithCommas from '../utils/numberWithCommas' */

const Product = props => {
    return (
        <div className="product-card">
            <Link to={`/Catalog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.image01} alt="" />
                    <img src={props.image02} alt="" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {props.price}
                    <span className="product-card__price__old">
                        <del>399.000đ</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    backgroundColor="blue"
                    size="sm"
                    icon="bx bx-cart"
                    animation={true}
                >
                    Chọn mua
                </Button>
            </div>
        </div>
    )
}

Product.propTypes = {
    image01: PropTypes.string.isRequired,
    image02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default Product
