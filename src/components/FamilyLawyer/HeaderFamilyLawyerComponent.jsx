import React from 'react';

const HeaderFamilyLawyerComponent = () => {
    return (

        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">
                    <a href="/" className="logo d-flex align-items-center me-auto">
                        <h1 className="sitename">FONSECA OLIVEIRA</h1>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Áreas de Atuação</a></li>
                            <li><a href="/">Sócios</a></li>
                            <li><a className="nav-link scrollto" href="/">Whatsapp</a></li>
                            <li><a href="/">Contato</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                </div>
            </header>

            <section id="hero" className="hero section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
                            <h1 className="">ADVOGADO DE FAMÍLIA</h1>
                            <p className="">Atuamos na resolução de conflitos familiares e com inventários de maneira humanizada e individualizada.</p>
                            <div className="d-flex">
                                <a href="https://api.whatsapp.com/send?phone=5534997769192" className="btn-get-started">Entre em contato via Whatsapp</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

    );
};

export default HeaderFamilyLawyerComponent;
