import React from 'react';
import office1 from '../assets/img/office1.jpeg';
import office4 from '../assets/img/office4.jpeg';
import office3 from '../assets/img/office3.jpeg';

const PortfolioComponent = () => {
    
    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title" data-aos="fade-up">
                <h2>NOSSO ESCRITÓRIO</h2>
            </div>
            <div className="container">

                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src={office4} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src={office1} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src={office3} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                            </div>
                        </div>

       

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioComponent;
