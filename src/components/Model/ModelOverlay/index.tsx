import { useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import useWrapperScroll from '../../Hooks/useWrapperScroll';

import { CarModel } from '../ModelsContext';
import { Container } from './styles';

interface Props {
    model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({ model, children }) => {

    const getSectionDimensions = useCallback(() => {
        return {
            offsetTop: model.sectionRef.current?.offsetTop,
            offsetHeight: model.sectionRef.current?.offsetHeight
        } as SectionDimensions
    }, [model.sectionRef]);

    const [dimensions, setDimensions] = useState<SectionDimensions>(
        getSectionDimensions()
    );

    useLayoutEffect(() => {
        function onResize() {
            window.requestAnimationFrame(() => setDimensions(getSectionDimensions))
        };

        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, [getSectionDimensions])

    const { scrollY } = useWrapperScroll();

    // Necessário para saber quando o usuário scrollou dentro da div, é dividido pelo valor máximo para saber a porcentagem
    const sectionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight);

    // aqui é feito toda a animação de opacidade dos modelos
    const opacity = useTransform(
        sectionScrollProgress,
        [-0.42, -0.05, 0.05, 0.42],
        [0, 1, 1, 0]
    );

    // feito para poder selecionar de forma individual cada nome de cada modelo
    const pointerEvents = useTransform(opacity, value =>
        value > 0 ? 'auto' : 'none'
    );

    return (
        <Container style={{ opacity, pointerEvents }}>
            {children}
        </Container>
    );
};

export default ModelOverlay;
