import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne } from './Data'
import Princing from '../../Pricing';

function Services() {
    return (
        <>
            <Princing />
            <HeroSection {...homeObjOne} />
        </>
    );
}

export default Services
