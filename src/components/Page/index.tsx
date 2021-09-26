import { ModelsWrapper, ModelSection } from '../Model';
import { Container, Spacer } from './styles';

import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';


function Page() {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Model S',
                        'Model Y',
                        'Model 3',
                        'Model X',
                        'Solar Panels',
                        'Solar Roof',
                        'Accessories'
                    ].map(modelName => (
                        <ModelSection
                            key={modelName}
                            className="colored"
                            modelName={modelName}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={modelName}
                                    description="Order Online for Delivery"
                                />
                            }
                        />
                    ))}

                </div>

                <Spacer />

                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    );
};

export default Page;
