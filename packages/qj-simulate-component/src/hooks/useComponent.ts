import { getEnv } from '@brushes/api';
import {useEffect, useState} from 'react';
import { View, Text } from '../components'
import { ComponentType } from './type';

const gModelMap = new Map(); // 存储组件


export function useComponent() {
  const [getComponent, setComponent] = useState<ComponentType>({} as any);

  useEffect(() => {
    const existedComponent = gModelMap.get('component');
    if(!existedComponent) {
      (async () => {
        const flag = getEnv();
        let comp = {} as any
        if(flag) {
          comp = await import('@tarojs/components');
        } else {
          const antdComp = await import("antd-mobile");
          comp = { ...antdComp, View, Text}
        }
        gModelMap.set('component', comp);
        setComponent(comp);
      })()
    } else {
      setComponent(existedComponent);
    }

  }, []);

  return getComponent;
}
