import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import 'glightbox/dist/css/glightbox.css';
import GLightbox from 'glightbox';
import office1 from '../assets/img/office1.jpeg';
import office2 from '../assets/img/office2.jpeg';
import office3 from '../assets/img/office3.jpeg';

import office4 from '../assets/img/office4.jpeg';
import office5 from '../assets/img/office5.jpeg';
import office6 from '../assets/img/office6.jpeg';

import office7 from '../assets/img/office7.jpeg';
import office8 from '../assets/img/office8.jpeg';
import office9 from '../assets/img/office9.jpeg';

const PortfolioComponent = () => {
    useEffect(() => {
        const swiper = new Swiper('.gallery-slider', {
            speed: 400,
            loop: true,
            centeredSlides: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            observer: true,
            observeParents: true,
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }
        });

        const lightbox = GLightbox({
            selector: '.gallery-lightbox'
        });

        return () => {
            swiper.destroy(true, true);
            lightbox.destroy();
        };
    }, []);

    return (
        <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>NOSSO ESCRITÓRIO</h2>
                </div>

                <div className="gallery-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><a className="gallery-lightbox" href={office1}><img src={office1} className="img-fluid" alt="" /></a></div>
                        <div className="swiper-slide"><a className="gallery-lightbox" href={office2}><img src={office2} className="img-fluid" alt="" /></a></div>
                        <div className="swiper-slide"><a className="gallery-lightbox" href={office3}><img src={office3} className="img-fluid" alt="" /></a></div>

                        <div className="swiper-slide"><a className="gallery-lightbox" href={office4}><img src={office4} className="img-fluid" alt="" /></a></div>
                        <div className="swiper-slide"><a className="gallery-lightbox" href={office5}><img src={office5} className="img-fluid" alt="" /></a></div>
                        <div className="swiper-slide"><a className="gallery-lightbox" href={office6}><img src={office6} className="img-fluid" alt="" /></a></div>

                        <div className="swiper-slide"><a className="gallery-lightbox" href={office7}><img src={office7} className="img-fluid" alt="" /></a></div>
                        <div className="swiper-slide"><a className="gallery-lightbox" href={office8}><img src={office8} className="img-fluid" alt="" /></a></div>
                        <div className="swiper-slide"><a className="gallery-lightbox" href={office9}><img src={office9} className="img-fluid" alt="" /></a></div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioComponent;
