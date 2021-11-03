import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../component/Helmet'
import HeroSlider from '../component/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../component/Section'
import PolicyCart from '../component/PolicyCart'
import Grid from '../component/Grid'
import ProductCard from '../component/Product'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import banner from '../assets/images/banner.png'


const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* hero Slider */}
            <HeroSlider
                data={heroSliderData}
                controller={true}
                auto={true}
                timeout={5000}
            />
            {/* end hero Slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {policy.map((item, index) =>
                            <Link to="/policy" key={index}>
                                <PolicyCart

                                    name={item.name}
                                    icon={item.icon}
                                    description={item.description}
                                />
                            </Link>
                        )}
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best sell section */}
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) =>
                                <ProductCard
                                    key={index}
                                    image01={item.image01}
                                    image02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best sell section */}

            {/* new arrival section  */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) =>
                                <ProductCard
                                    key={index}
                                    image01={item.image01}
                                    image02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section  */}

            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular products section  */}
            <Section>
                <SectionTitle>
                    Phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) =>
                                <ProductCard
                                    key={index}
                                    image01={item.image01}
                                    image02={item.image02}
                                    name={item.title}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            )
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular products section  */}
        </Helmet>
    )
}

export default Home
