import React from 'react';
import { useComponent } from '@brushes/qj-simulate-component';

export const Notice = ({
    text,
    backgroundColor,
    color,
    fontSize,
    borderColor,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
}: {
    fontSize: string;
    borderColor: string;
    color: string;
    text: React.ReactNode;
    backgroundColor: string;
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
}) => {
    const { View, NoticeBar } = useComponent();
    if (!View) return null;
    return (
        <View style={{ paddingTop, paddingBottom }}>
            <View>
                <NoticeBar
                    speed={50}
                    style={{
                        '--border-color': borderColor,
                        '--font-size': fontSize + 'px',
                        '--background-color': backgroundColor,
                        '--text-color': color,
                        paddingLeft,
                        paddingRight
                    }}
                    content={text}
                    color="alert"
                />
            </View>
        </View>
    );
};
