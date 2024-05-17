import React from 'react';

const FooterComponent = () => {

    return (
        <footer id="footer" class="footer">
            <div class="container footer-top">
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" class="d-flex align-items-center">
                            <span class="sitename">FONSECA OLIVEIRA</span>
                        </a>
                        <div class="footer-contact pt-3">
                            <p>Avenida Cesário Alvim, 2686 - Nossa Senhora Aparecida</p>
                            <p>Uberlândia - MG Brasil</p>
                            <p class="mt-3"><strong>Phone:</strong> <span>(34) 99776-9192</span></p>
                            <p><strong>Email:</strong> <span>contato@fonsecaoliveira.com</span></p>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links">
                        <h4>Links Úteis</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#services">Áreas de Atuação</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#team">Sócios</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#cta">Whatsapp</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-12">
                        <h4>Nossas Redes Sociais</h4>
                        <p>Acompanhe nossas atualizações e conteúdos exclusivos sobre direito. Fique por dentro das últimas notícias jurídicas e dicas importantes.</p>
                        <div class="social-links d-flex">
                            <a href="https://instagram.com/fonsecaoliveira.adv?igshid=MGU3ZTQzNzY="><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong class="px-1 sitename">FONSECA OLIVEIRA</strong> <span>All Rights Reserved</span></p>
            </div>
            <a href="#hero" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        </footer>
    );
};

export default FooterComponent;