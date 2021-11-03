import React, { useCallback, useEffect, useRef, useState } from 'react';
import Helmet from '../component/Helmet';
import CheckBox from '../component/CheckBox';
import Button from '../component/Button';
import InfinittyList from '../component/InfinittyList';

import category from '../assets/fake-data/category'
import productData from '../assets/fake-data/products';
import colors from '../assets/fake-data/product-colors';
import size from '../assets/fake-data/product-size';

const Catalog = () => {

    const initFilter = {
        category: [],
        color: [],
        size: []
    }
    const productList = productData.getAllProducts();

    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter);

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] })
                    break;
                case "COLOR":
                    setFilter({ ...filter, color: [...filter.color, item.color] })
                    break;
                case "SIZE":
                    setFilter({ ...filter, size: [...filter.size, item.size] })
                    break;
                default:
                    break;
            }
        }
        else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug);
                    setFilter({ ...filter, category: newCategory })
                    break;
                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item.color);
                    setFilter({ ...filter, color: newColor })
                    break;
                case "SIZE":
                    const newSize = filter.size.filter(e => e !== item.size);
                    setFilter({ ...filter, size: newSize })
                    break;
                default:
                    break;
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)
    const updateProducts = useCallback(
        () => {
            let temp = productList
            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.indexOf(e.categorySlug))
            }
            if (filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined;
                })
            }
            if (filter.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined;
                })
            }
            setProducts(temp);
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null);
    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
                    {/* Danh mục */}

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div className="catalog__filter__widget__content__item" key={index}>
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Tìm kiếm theo màu sắc */}

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                colors.map((item, index) => (
                                    <div className="catalog__filter__widget__content__item" key={index}>
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/*  Tìm kiếm theo kích thước */}
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Kích cỡ
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                size.map((item, index) => (
                                    <div className="catalog__filter__widget__content__item" key={index}>
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button
                                size="sm"
                                backgroundColor="blue"
                                onClick={clearFilter}
                            >
                                Xóa bộ lọc
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__filter__toggle">
                    <Button
                        size="sm"
                        backgroundColor="black"
                        onClick={() => showHideFilter()}
                    >
                        Bộ lọc
                    </Button>
                </div>
                <div className="catalog__content">
                    <InfinittyList
                        data={products}
                    />

                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
