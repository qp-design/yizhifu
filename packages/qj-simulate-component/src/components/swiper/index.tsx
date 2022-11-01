import React, {memo, useCallback, useEffect, useState} from 'react';
import { useComponent } from '../../hooks';
import {getEnv} from '@brushes/api';
import { max } from 'lodash-es';

interface SwiperType<T> {
  indicatorDots?: boolean,
  direction?: 'horizontal' | 'vertical',
  autoplayInterval: number,
  loop?: boolean,
  type: number,
  render: Function,
  style: { [v:string]: unknown },
  data: Array<T>
}

function SwiperJsx<T> (
  {
    indicatorDots = true,
    direction = 'horizontal',
    autoplayInterval,
    loop = true,
    data,
    type,
    render,
    style,
    ...props
  }: SwiperType<T>) {
  const { Swiper, SwiperItem } = useComponent();
  const [swiperProps, setSwiper] = useState({});
  const [H, setH] = useState(0);
  const isTaro = getEnv();

  useEffect(() => {
    let propsStyle = {}
    if(isTaro) {
      propsStyle = {
        vertical: direction !== 'horizontal',
        interval: autoplayInterval,
        indicatorColor: '#999',
        indicatorActiveColor: '#333',
        circular: loop,
        indicatorDots,
        style: {
          ...style,
          height: type == 1 ? H : ''
        }
      }
    } else {
      propsStyle = {
        direction,
        autoplayInterval,
        loop,
        style
      }
    }
    setSwiper(propsStyle)
  }, [direction, autoplayInterval, loop, indicatorDots, H]);

  useEffect(() => {
    if (isTaro && type === 1) {
      let deviceW: any

      try {
        const sysInfo = wx.getSystemInfoSync();
        deviceW = sysInfo.windowWidth;
      } catch (err) {
      }

      (async () => {
        let heightArr: Array<any> = []
        for (let i = 0; i < data.length; i++) {
          const res = await new Promise((resolve, reject) => {
            wx.getImageInfo({
              src: data[i].imgUrl,
              success(res: any) {
                resolve(res)
              }
            })
          })
          heightArr.push(Math.floor(deviceW * res.height / res.width))
        }
        console.log(86, max(heightArr))
        setH(max(heightArr))
      })()
    }
  }, [data]);

  const innerRender = useCallback((item: T, index: number) => {
    if(isTaro) {
      return (
        <SwiperItem key={index}>
          {
            render(item)
          }
        </SwiperItem>
      )
    }
    return (
      <Swiper.Item key={index}>
        {
          render(item)
        }
      </Swiper.Item>
    )
  }, []);

  return (
    <Swiper
      { ...{ ...swiperProps, ...props }}
    >
      {
        data.map(innerRender)
      }
    </Swiper>
  )
}


export const SmoothSwiper = memo(SwiperJsx);
