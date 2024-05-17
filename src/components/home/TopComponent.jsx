import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ImageHero from '../assets/img/logo2.png'

const TopComponent = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="hero" className="hero section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-12 order-1 order-lg-2 d-flex justify-content-center align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <img src={ImageHero} className="img-fluid animated glightbox" alt="" data-glightbox="type: image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopComponent;


