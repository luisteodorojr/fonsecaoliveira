import React, { Component } from "react";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/style.css';
import AOS from 'aos';
import HeaderComponent from './HeaderComponent.jsx';
import TopComponent from './TopComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import ContactComponent from './ContactComponent.jsx';
import CallToActionComponent from './CallToActionComponent.jsx';
import ServiceComponent from './ServiceComponent.jsx';
import TeamComponent from './TeamComponent.jsx';
import PortfolioComponent from './PortfolioComponent.jsx';
import AboutComponent from './AboutComponent.jsx';

class Home extends Component {
    componentDidMount() {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-out',
            delay: 100,
        });

        window.addEventListener('scroll', this.toggleScrolled);
        window.addEventListener('load', this.toggleScrolled);
        window.addEventListener('scroll', this.navmenuScrollspy);
        window.addEventListener('load', this.navmenuScrollspy);

        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
        if (mobileNavToggleBtn) {
            mobileNavToggleBtn.addEventListener('click', this.mobileNavToggle);
        }

        document.querySelectorAll('#navmenu a').forEach(navmenu => {
            navmenu.addEventListener('click', () => {
                if (document.querySelector('.mobile-nav-active')) {
                    this.mobileNavToggle();
                }
            });
        });

        document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
            navmenu.addEventListener('click', (e) => {
                if (document.querySelector('.mobile-nav-active')) {
                    e.preventDefault();
                    navmenu.parentNode.classList.toggle('active');
                    navmenu.parentNode.nextElementSibling.classList.toggle('dropdown-active');
                    e.stopImmediatePropagation();
                }
            });
        });

        let scrollTop = document.querySelector('.scroll-top');
        if (scrollTop) {
            scrollTop.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        window.addEventListener('scroll', this.toggleScrollTop);
        window.addEventListener('load', this.toggleScrollTop);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleScrolled);
        window.removeEventListener('load', this.toggleScrolled);
        window.removeEventListener('scroll', this.toggleScrollTop);
        window.removeEventListener('load', this.toggleScrollTop);
        window.removeEventListener('scroll', this.navmenuScrollspy);
        window.removeEventListener('load', this.navmenuScrollspy);
    }

    toggleScrolled = () => {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    mobileNavToggle = () => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }

    toggleScrollTop = () => {
        let scrollTop = document.querySelector('.scroll-top');
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }

    navmenuScrollspy = () => {
        let navmenulinks = document.querySelectorAll('.navmenu a');
        navmenulinks.forEach(navmenulink => {
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                navmenulink.classList.add('active');
            } else {
                navmenulink.classList.remove('active');
            }
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <TopComponent />
                <ServiceComponent />
                <TeamComponent />
                <CallToActionComponent />
                <PortfolioComponent />
                <AboutComponent />
                <ContactComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default Home;
