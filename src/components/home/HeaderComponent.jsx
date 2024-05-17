import React from 'react';

const HeaderComponent = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">FONSECA OLIVEIRA</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Áreas de Atuação</a></li>
            <li><a href="#team">Sócios</a></li>
            <li><a className="nav-link scrollto" href="#cta">Whatsapp</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
