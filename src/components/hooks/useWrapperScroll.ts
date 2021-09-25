import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";

import ModelsContext from "../Model/ModelsContext";

export default function useWrapperScroll() {
    const { wrapperRef } = useContext(ModelsContext);

    const scrollY = useMotionValue(0);
    const scrollYProgress = useMotionValue(0);

    useEffect(() => {
        const element = wrapperRef.current;

        if (element) {
            const updateScrollValue = () => {
                const { scrollTop, scrollHeight, offsetHeight } = element;

                const fullScroll = scrollHeight - offsetHeight;

                scrollY.set(scrollTop); // varia em px (Quantidade de pixels que o usuário está scrollando)
                scrollYProgress.set(scrollTop / fullScroll); // varia de 0 a 1 (%) (É o progesso que ele fez na página)
            };

            element.addEventListener('scroll', updateScrollValue);

            return () => element.removeEventListener('scroll', updateScrollValue);
        }
    }, [scrollY, scrollYProgress, wrapperRef])

    return { scrollY, scrollYProgress };
}
