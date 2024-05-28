import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ModalComponent from './ModalComponent';
import LoadingSpinner from './LoadingSpinner';

const ContactComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_8scuu6o', 'template_fdjbpuh', e.target, 'IlINj72qwGuU5FcPA')
            .then((result) => {
                setLoading(false);
                console.log(result.text);
                setShowModal(true);
            }, (error) => {
                setLoading(false);
                console.log(error.text);
            });

        e.target.reset();
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contato</h2>
                <p>Prestamos atendimento online para todo o Brasil e presencial na cidade de Uberlândia-MG.
                    Entre em contato conosco por meio dos canais de atendimento a seguir:</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-5">
                        <div className="info-wrap">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>Endereço:</h3>
                                    <p>Avenida Cesário Alvim, 2686 - Nossa Senhora Aparecida, Uberlândia - MG, Brasil</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-telephone flex-shrink-0"></i>
                                <div>
                                    <h3>Celular:</h3>
                                    <p>(34) 99776-9192</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>Email:</h3>
                                    <p>contato@fonsecaoliveira.com</p>
                                </div>
                            </div>

                            <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.6433605579623!2d-48.264686184621986!3d-18.902896412073158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445bc387f2035%3A0x950293f9b27da6e6!2sAv.%20Ces%C3%A1rio%20Alvim%2C%202686%20-%20Nossa%20Sra.%20Aparecida%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-694%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1678744224186!5m2!1spt-BR!2sus" frameBorder="0" style={{ border: '0', width: '100%', height: '270px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="col-lg-7">

                        <form onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                        {loading && <LoadingSpinner />}

                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">Nome</label>
                                    <input type="text" name="name" id="name-field" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email-field" className="pb-2">Email</label>
                                    <input type="email" className="form-control" name="email" id="email-field" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="subject-field" className="pb-2">Assunto</label>
                                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="message-field" className="pb-2">Mensagem</label>
                                    <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit">Enviar Mensagem</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {showModal && <ModalComponent showModal={showModal} closeModal={closeModal} />}

        </section>
    );
};

export default ContactComponent;

//smtp.locaweb.com.br
//587
//rafaela@fonsecaoliveira.com