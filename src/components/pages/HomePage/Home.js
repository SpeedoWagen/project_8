import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
import Princing from '../../Pricing';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Princing />
            <HeroSection {...homeObjFour} />
        </>
    );
}

export default Home
