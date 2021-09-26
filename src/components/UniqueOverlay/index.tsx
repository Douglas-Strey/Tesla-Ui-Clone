import React from 'react';
import useWrapperScroll from '../Hooks/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';
import { useTransform } from 'framer-motion';

const UniqueOverlay: React.FC = () => {

    const { scrollYProgress } = useWrapperScroll();

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

    return (
        <Container>
            <Header>
                <Logo />
                <Burger />
            </Header>

            <Footer style={{ opacity }}>
                <ul>
                    <li>
                        <a href="#">Tesla © 2021</a>
                    </li>
                    <li>
                        <a href="#">Privacy & Legal</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Engage</a>
                    </li>
                    <li>
                        <a href="#">Locations</a>
                    </li>
                    <li>
                        <a href="#">UI CLone</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    );
};

export default UniqueOverlay;
