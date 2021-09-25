import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';


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
            </ModelsWrapper>
        </Container>
    );
};

export default Page;
