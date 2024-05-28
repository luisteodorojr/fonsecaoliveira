import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageTeam2 from '../assets/img/team-6.jpeg'
import ImageTeam3 from '../assets/img/team-5.jpeg'

const TeamComponent = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>SÓCIOS</h2>
                <p>O nosso compromisso em relação aos nossos clientes é garantir o respeito aos seus direitos,
                     seguindo sempre uma conduta eficiente, cuidadosa e precisa.
</p>
            </div>
            <div className="container">
                <div className="row gy-4">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="team-member d-flex align-items-start">
                            <div className="pic"><img src={ImageTeam2} className="img-fluid" alt="" /></div>

                            <div className="member-info">
                                <h4>Rafaela Fonseca</h4>
                                <span>Sócia-fundadora</span>
                                <p> Sócia-fundadora, advogada inscrita na OAB/MG sob o n° 162.271.
                                     Expert nas áreas cível, consumidor, família e sucessões, atuando nessas áreas
                                      há mais de 8 anos, nos estados de São Paulo, Minas Gerais, Paraná e Rio de Janeiro.
                                       Pós-graduanda em Direito Tributário pelo IBET. Membro da Comissão de Família e Sucessões da OAB de Uberlândia-MG.</p>
                                <div className="social">
                                    <a href="https://www.instagram.com/rafaelafonseca.adv/"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/rafaelaalvesfonseca"> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="team-member d-flex align-items-start">
                            <div className="pic"><img src={ImageTeam3} className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Wendell Oliveira</h4>
                                <span>Sócio-fundador</span>
                                <p>Sócio-fundador, advogado inscrito na OAB/MG sob o n° 162.301. Especialista em Direito
                                     do Trabalho pela PUC-MG, pós-graduando em Direito Tributário pelo IBET. Atua na área empresarial,
                                      com ampla experiência nas área cível e trabalhista.</p>
                                <div className="social">
                                    <a href="https://instagram.com/wendell.adv?igshid=YmMyMTA2M2Y="><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/wendell-faria-a7834632"> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamComponent;