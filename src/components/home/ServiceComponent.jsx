import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

const ServiceComponent = () => {
    return (
        <section id="services" className="services section">


            <div className="container section-title" data-aos="fade-up">
                <h2>ÁREAS DE ATUAÇÃO</h2>
                <p>O escritório Fonseca Oliveira Advogados Associados é expert nas áreas cível,
                     família, sucessões e consumidor, e especialista na área trabalhista.
                      Buscamos atingir o objetivo do cliente, tendo como diferencial um serviço completo,
                       específico, individualizado e de qualidade desde o primeiro atendimento.
                </p>
            </div>

            <div className="container">

                <div className="row gy-4">

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-building icon"></i></div>
                            <h4><a href="#services" className="stretched-link">DIREITO CIVIL</a></h4>
                            <p><i className="bi bi-check-circle"></i> Confecção e analises de contratos</p>
                            <p><i className="bi bi-check-circle"></i> Parecer verbal e escrito</p>
                            <p><i className="bi bi-check-circle"></i> Ação de cobrança</p>
                            <p><i className="bi bi-check-circle"></i> Execução</p>
                            <p><i className="bi bi-check-circle"></i> Busca e apreensão de bens</p>
                            <p><i className="bi bi-check-circle"></i> Indenização por dano moral e material</p>
                            <p><i className="bi bi-check-circle"></i> Ações de recuperação de crédito judicial e extrajudicial</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-shield-check icon"></i></div>
                            <h4><a href="#services" className="stretched-link">DIREITO DO CONSUMIDOR</a></h4>
                            <p><i className="bi bi-check-circle"></i> Contratos Consumeristas</p>
                            <p><i className="bi bi-check-circle"></i> Fraude em cartão de crédito</p>
                            <p><i className="bi bi-check-circle"></i> Boleto Fraudado</p>
                            <p><i className="bi bi-check-circle"></i> Cobrança, negativação e protesto indevido</p>
                            <p><i className="bi bi-check-circle"></i> Direito de Arrependimento</p>
                            <p><i className="bi bi-check-circle"></i> Extravio de bagagem</p>
                            <p><i className="bi bi-check-circle"></i> Atraso ou cancelamento de voo</p>
                            <p><i className="bi bi-check-circle"></i> Overbooking</p>
                            <p><i className="bi bi-check-circle"></i> Danos por queda de energia</p>
                            <p><i className="bi bi-check-circle"></i> Encerramento de conta bancária</p>
                            <p><i className="bi bi-check-circle"></i> Atraso na entrega da prestação do serviço</p>
                            <p><i className="bi bi-check-circle"></i> Corte indevido de água, luz ou internet</p>
                            <p><i className="bi bi-check-circle"></i> Protesto de dívida paga</p>
                            <p><i className="bi bi-check-circle"></i> Produto Defeituoso</p>
                            <p><i className="bi bi-check-circle"></i> Cláusulas Abusivas</p>
                            <p><i className="bi bi-check-circle"></i> Venda casada</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-people icon"></i></div>
                            <h4><a href="#services" className="stretched-link">FAMÍLIA E SUCESSÕES</a></h4>
                            <p><i className="bi bi-check-circle"></i> Divórcio</p>
                            <p><i className="bi bi-check-circle"></i> Reconhecimento e Dissolução de União Estável</p>
                            <p><i className="bi bi-check-circle"></i> Pensão Alimentícia</p>
                            <p><i className="bi bi-check-circle"></i> Execução de Alimentos</p>
                            <p><i className="bi bi-check-circle"></i> Exoneração de Alimentos</p>
                            <p><i className="bi bi-check-circle"></i> Revisional de Alimentos</p>
                            <p><i className="bi bi-check-circle"></i> Guarda</p>
                            <p><i className="bi bi-check-circle"></i> Regulamentação de Visitas</p>
                            <p><i className="bi bi-check-circle"></i> Investigação e Negatória de Paternidade</p>
                            <p><i className="bi bi-check-circle"></i> Inventário</p>
                            <p><i className="bi bi-check-circle"></i> Planejamento Sucessório</p>
                            <p><i className="bi bi-check-circle"></i> Retificação de Registro Civil</p>
                            <p><i className="bi bi-check-circle"></i> Pedido de Alvará</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-briefcase icon"></i></div>
                            <h4><a href="#services" className="stretched-link">DIREITO DO TRABALHO</a></h4>
                            <p><i className="bi bi-check-circle"></i> Reconhecimento de vínculo de emprego</p>
                            <p><i className="bi bi-check-circle"></i> Rescisão indireta</p>
                            <p><i className="bi bi-check-circle"></i> Reversão de justa causa</p>

                            <p><i className="bi bi-check-circle"></i> Recebimento de horas extras e intervalos</p>
                            <p><i className="bi bi-check-circle"></i> Pagamento de FGTS e outras verbas em atraso ou previstas em Convenções e Acordos Coletivos</p>
                            <p><i className="bi bi-check-circle"></i> Ações Indenizatórias</p>
                            <p><i className="bi bi-check-circle"></i> Ações para Servidores Públicos</p>
                            <p><i className="bi bi-check-circle"></i> Consultoria preventiva e elaboração de defesas</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ServiceComponent;
