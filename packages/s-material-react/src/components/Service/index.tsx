import React, { memo } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';

interface ServiceType {
    width: number;
    height: number;
    borderRadius: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}

const ServiceJsx: React.FC<ServiceType> = ({
                                               width,
                                               height,
                                               top,
                                               right,
                                               bottom,
                                               left,
                                               borderRadius
                                           }) => {
    const { View } = useComponent();
    return (
        <View style={{ width, height, borderRadius, top, left, right, bottom }}
              className={'components-service'}>{}</View>
    );
};
export const Service = memo(ServiceJsx);
