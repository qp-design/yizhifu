import { useComponent } from '@brushes/qj-simulate-component';
// import {useState} from "react";

export const StepNum = ({ num, min = 1, onChange }: { num: number; min?: number; onChange?: any }) => {
    const { View, Text } = useComponent();

    return (
        <View className={'stepNum'}>
            <View
                className={'btn minus'}
                onClick={() => {
                    return num <= min ? 'null' : onChange(num - 1);
                }}
            >
                -
            </View>
            <Text className={'content'}>{num}</Text>
            <View className={'btn plus'} onClick={() => onChange(num + 1)}>
                +
            </View>
        </View>
    );
};
