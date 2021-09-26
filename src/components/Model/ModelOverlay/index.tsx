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

    return (
        <Container>
            {children}
        </Container>
    );
};

export default ModelOverlay;
