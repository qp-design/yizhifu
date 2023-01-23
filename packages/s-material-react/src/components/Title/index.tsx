import React, { memo } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';

interface TitleType {
    value: string;
    fontSize: number;
    textAlign: any;
    color: string;
    backgroundColor: string;
    fontWeight: string;
    textDecoration: string;
    fontStyle: string;
    paddingTop: number;
    paddingLeft: number;
    paddingRight: number;
    paddingBottom: number;
}

const TitleJsx: React.FC<TitleType> = ({
    value,
    fontSize,
    textAlign,
    color,
    backgroundColor,
    fontWeight,
    textDecoration,
    fontStyle,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom
}) => {
    const { View } = useComponent();
    return (
        <View style={{ paddingTop, paddingBottom }}>
            <View
                style={{
                    fontSize,
                    textAlign,
                    color,
                    backgroundColor,
                    fontWeight,
                    textDecoration,
                    fontStyle,
                    paddingLeft,
                    paddingRight
                }}
            >
                {value}
            </View>
        </View>
    );
};

export const Title = memo(TitleJsx);
