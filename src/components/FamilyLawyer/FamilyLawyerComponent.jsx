import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import AOS from 'aos';
import CallToActionComponent from '../home/CallToActionComponent';
import HeaderFamilyLawyerComponent from './HeaderFamilyLawyerComponent';
import ServiceFamilyLawyerComponent from './ServiceFamilyLawyerComponent';
import FooterComponent from '../home/FooterComponent';
import TeamFamilyLawyerComponent from './TeamFamilyLawyerComponent';
import ContactComponent from '../home/ContactComponent';


const FamilyLawyerComponent = () => {

    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    useEffect(() => {
        const tagManagerArgs = {
            //gtmId: 'AW-11176479725'
        };

        TagManager.initialize(tagManagerArgs);
    }, []);

    return (
        <div>
            <HeaderFamilyLawyerComponent />
            <ServiceFamilyLawyerComponent />
            <CallToActionComponent />
            <TeamFamilyLawyerComponent />
            <ContactComponent />
            <FooterComponent />

        </div>
    );
};

export default FamilyLawyerComponent;
