import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

const HeroSlider = props => {

    const timeout = props.timeout ? props.timeout : 3000;
    const [activeSlide, setActiveSlide] = useState(0);
    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === props.data.length ? 0 : activeSlide + 1;
            setActiveSlide(index);
        },
        [activeSlide, props.data.length],
    )

    const prevtSlide = () => {
        const index = activeSlide - 1 < 0 ? props.data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeout)
            return () => {
                clearInterval(slideAuto);
            }
        }
    }, [nextSlide, timeout, props])

    return (
        <div className="hero-slider">
            {
                props.data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active={index === activeSlide} />
                ))
            }
            {
                props.controller ? (
                    <div className="hero-slider__control">
                        <div className="hero-slider__control__item" onClick={prevtSlide}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        <div className="hero-slider__control__item">
                            <div className="index">
                                {activeSlide + 1}/{props.data.length}
                            </div>
                        </div>
                        <div className="hero-slider__control__item" onClick={nextSlide}>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    controller: PropTypes.bool,
    auto: PropTypes.bool,
    timeout: PropTypes.number,

}
const HeroSliderItem = props => (
    <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
        <div className="hero-slider__item__info">
            <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider__item__info__desc">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider__item__info__btn">
                <Link to={props.item.path}>
                    <Button
                        backgroundColor={props.item.color}
                        icon="bx bx-cart"
                        animation={true}

                    >
                        xem chi tiết
                    </Button>
                </Link>
            </div>
        </div>
        <div className="hero-slider__item__img">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} className="" alt="" />
        </div>
    </div>
)

export default HeroSlider
