import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../component/Button'

import { withRouter } from 'react-router'


const ProductView = props => {

    const product = props.product;

    const [previewImg, setPreviewImg] = useState(product.image01);
    const [descExpand, setDescExpand] = useState(false);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quality, setQuality] = useState(1);

    const updateQuality = (type) => {
        if (type === 'plus') {
            setQuality(quality + 1)
        } else {
            setQuality(quality - 1 < 1 ? 1 : quality - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuality(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        if (color === undefined) {
            alert('Vùi lòng chọn màu sắc')
            return false;
        }
        if (size === undefined) {
            alert('Vùi lòng chọn kích cỡ')
            return false;
        }
        return true;
    }

    const addToCart = () => {
        if (check()) {
            console.log(color, size, quality)
        }
    }

    const gotoCart = () => {
        if (check()) {
            props.history.push('/cart');
        }
    }

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${descExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}>
                    </div>
                    <div className="product-description__toggle">
                        <Button
                            size="sm"
                            backgroundColor="blue"
                            onClick={() => setDescExpand(!descExpand)}
                        >
                            {descExpand ? 'Thu gọn' : 'Xem Thêm'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">{product.price}</span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu sắc
                    </div>
                    <div className="product__info__item__list">
                        {product.colors.map((item, index) => (
                            <div
                                className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
                                key={index}
                                onClick={() => setColor(item)}
                            >
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích cỡ
                    </div>
                    <div className="product__info__item__list">
                        {product.size.map((item, index) => (
                            <div
                                className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                                key={index}
                                onClick={() => setSize(item)}
                            >
                                <span className="product__info__item__list__item__size">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng
                    </div>
                    <div className="product__info__item__quanlity">
                        <div className="product__info__item__quanlity__btn" onClick={() => updateQuality('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quanlity__input">
                            {quality}
                        </div>
                        <div className="product__info__item__quanlity__btn" onClick={() => updateQuality('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button
                        size="sm"
                        backgroundColor="blue"
                        onClick={() => addToCart()}
                    >
                        Thêm vào giỏ
                    </Button>
                    <Button
                        size="sm"
                        backgroundColor="blue"
                        onClick={() => gotoCart()}
                    >
                        Mua ngay
                    </Button>
                </div>
                <div className={`product-description mobile ${descExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}>
                    </div>
                    <div className="product-description__toggle">
                        <Button
                            size="sm"
                            backgroundColor="blue"
                            onClick={() => setDescExpand(!descExpand)}
                        >
                            {descExpand ? 'Thu gọn' : 'Xem Thêm'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired,
}

export default withRouter(ProductView)
