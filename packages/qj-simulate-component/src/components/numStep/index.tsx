import React from "react";
import {useComponent} from '../../hooks';
import {IconMobile} from '../iconMobile';


interface numStepType {
  count: number;
  handleStep: (e:string) => void;
  // min?: number;
  // max?: number;
}


export const NumStep: React.FC<numStepType> = ({count, handleStep}) => {

  const {View, Text} = useComponent();
  return (
    <View className={'numStep'}>
      <IconMobile value={'jianqu'} onClick={handleStep.bind(null, 'minus')}/>
      <Text className={'content'}>{count}</Text>
      <IconMobile value={'zengjia'} onClick={handleStep.bind(null, 'plus')}/>
    </View>
  )
}

