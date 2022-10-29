import React, {memo, ReactNode, useEffect, useState} from 'react';
import {useComponent} from '../../hooks';
import {getEnv} from '@brushes/api';

interface SwiperType {
  indicatorDots?: boolean,
  direction?: 'horizontal' | 'vertical',
  autoplayInterval: number,
  loop?: boolean,
  children: ReactNode,
  Swiper: ReactNode
}
const SwiperJsx = (
  {
    Swiper,
    indicatorDots = true,
    direction = 'horizontal',
    autoplayInterval,
    loop = true,
    children,
    ...props
  }: SwiperType) => {
  // const { Swiper } = useComponent();
  const isTaro = getEnv();
  const [swiperProps, setSwiper] = useState({});

  useEffect(() => {
    let propsStyle = {}
    if(isTaro) {
      propsStyle = {
        vertical: direction === 'horizontal',
        interval: autoplayInterval,
        indicatorColor: '#999',
        indicatorActiveColor: '#333',
        circular: loop,
        indicatorDots
      }
    } else {
      propsStyle = {
        direction,
        autoplayInterval,
        loop,
      }
    }
    setSwiper(propsStyle)
  }, [direction, autoplayInterval, loop, indicatorDots]);

  // if(!Swiper) return null;

  const obj = { ...swiperProps, ...props };
  return (
    <Swiper
      { ...obj}
    >
      {
        children
      }
    </Swiper>
  )
}


export const SwiperComponent = memo(SwiperJsx);
