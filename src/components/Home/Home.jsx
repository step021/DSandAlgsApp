import React from 'react';
import Spline from '@splinetool/react-spline';
import { HomeContainer, HomeWelcome, HomeLearners, HomeSplineContainer, HomeText, HomeParagraph } from './HomeStyle';

function Home() {

    return (
        <HomeContainer>
            <HomeText>
                <HomeWelcome> Welcome</HomeWelcome>
                <HomeLearners> Learners</HomeLearners>
                <HomeParagraph>
                    As a student who struggled learning Data Structures and Algorithms at the university level, 
                    I understand what it is like to not grasp a concept. I designed this website to help you 
                    learn these topics through detailed descriptions, code, and interactive visuals.
                </HomeParagraph>
            </HomeText>
            <HomeSplineContainer>
                <Spline  scene={"https://prod.spline.design/5DTF9Om5lgrSpatj/scene.splinecode"} />
            </HomeSplineContainer>
        </HomeContainer>
    );
}

export default Home;
