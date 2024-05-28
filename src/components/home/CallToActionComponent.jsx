import React from 'react';
import Image from '../assets/img/cta-bg.jpg'

const CallToActionComponent = () => {
    return (
        <section id="cta" className="call-to-action section">
            <img src={Image} alt="" />
            <div className="container">
                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    <div className="col-xl-9 text-center text-xl-start">
                        <h3>Fale conosco</h3>
                        <p>Envie sua dúvida ou agende sua consulta presencial ou online.</p>
                    </div>
                    <div className="col-xl-3 cta-btn-container text-center">
                        <a className="cta-btn align-middle" href="https://api.whatsapp.com/send?phone=5534997769192">Whatsapp</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionComponent;
