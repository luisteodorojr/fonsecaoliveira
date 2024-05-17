import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageTeam2 from '../assets/img/team-4.jpg'

const TeamFamilyLawyerComponent = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>ADVOGADA</h2>

            </div>
            <div className="container">
                <div className="row gy-4">

                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="team-member d-flex align-items-start">
                            <div className="pic"><img src={ImageTeam2} className="img-fluid" alt="" /></div>

                            <div className="member-info">
                                <h4>Rafaela Fonseca</h4>
                                <span>Sócia-fundadora</span>
                                <p>
                                    Advogada inscrita na OAB/MG sob o n° 162.271. Expert na área de família e sucessões,
                                    atuando nessas áreas há mais de 8 anos, nos estados de São Paulo,
                                    Minas Gerais, Paraná e Rio de Janeiro. Pós-graduanda em Direito Tributário pelo IBET.
                                    Membro da Comissão de Família e Sucessões da OAB de Uberlândia-MG.
                                </p>
                                <div className="social">
                                    <a href="https://www.instagram.com/rafaelafonseca.adv/"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/rafaelaalvesfonseca"> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamFamilyLawyerComponent;