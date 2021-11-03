import React, { useEffect } from 'react'
import Helmet from '../component/Helmet'
import Section, { SectionBody, SectionTitle } from '../component/Section'
import Grid from '../component/Grid'
import ProductCard from '../component/Product'
import ProductView from '../component/ProductView'

import productData from '../assets/fake-data/products'

const Product = props => {

    const product = productData.getProductsBySlug(props.match.params.slug);

    const relatedProducts = productData.getProducts(8);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product])
    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView
                        product={product}
                    />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {relatedProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                image01={item.image01}
                                image02={item.image02}
                                name={item.title}
                                price={item.price}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
