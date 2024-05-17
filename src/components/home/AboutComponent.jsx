import React from 'react';
import { Helmet } from 'react-helmet';

const AboutComponent = () => {
    return (
        <section id="about" className="about">
            <Helmet>
                <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
            </Helmet>

            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>QUALIDADE NO ATENDIMENTO</h2>
                </div>

                <div className="elfsight-app-3641a55a-1dc3-4033-a193-ee0b4a2a813a"></div>
            </div>
        </section>
    );
};

export default AboutComponent;
