import React, {Dispatch, SetStateAction} from "react";
import {useComponent} from '../../hooks';


interface numStepType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
}


export const NumStep: React.FC<numStepType> = ({count, setCount, min = 1, max = 999}) => {

  const handleStep = (type: string) => {
    console.log(15, count, min)
    switch (type) {
      case 'minus':
        if (count > min) {
          setCount(count => count - 1);
        }
        break;
      case 'plus':
        if (count < max) {
          setCount(count => count + 1);
        }
        break;
    }
  };

  const {View, Text} = useComponent();
  return (
    <View className={'numStep'}>
      <Text className={'btn minus'} onClick={handleStep.bind(null, 'minus')}>
        -
      </Text>
      <Text className={'content'}>{count}</Text>
      <Text className={'btn plus'} onClick={handleStep.bind(null, 'plus')}>
        +
      </Text>
    </View>
  )
}

