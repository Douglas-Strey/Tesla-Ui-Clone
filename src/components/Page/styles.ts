import styled from 'styled-components';

import ModelS from './assets/img/ModelS.jpg';
import ModelY from './assets/img/ModelY.jpg';
import Model3 from './assets/img/Model3.jpg';
import ModelX from './assets/img/ModelX.jpg';
import SolarPanel from './assets/img/SolarPanels.jpg';
import SolarRoof from './assets/img/SolarRoof.jpg';
import TeslaCharger from './assets/img/TeslaCharger.png';

export const Container = styled.div`
    .colored:nth-child(1) {
        background: #f1ffe7;
        background-image: url(${ModelS});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .colored:nth-child(2) {
        background: #f1ffe7;
        background-image: url(${ModelY});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .colored:nth-child(3) {
        background: #f1ffe7;
        background-image: url(${Model3});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .colored:nth-child(4) {
        background: #f1ffe7;
        background-image: url(${ModelX});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .colored:nth-child(5) {
        background: #f1ffe7;
        background-image: url(${SolarPanel});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .colored:nth-child(6) {
        background: #f1ffe7;
        background-image: url(${SolarRoof});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .colored:nth-child(7) {
        background: #f1ffe7;
        background-image: url(${TeslaCharger});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const Spacer = styled.div`
    height: 15vh;
    background: #fff;
`;
