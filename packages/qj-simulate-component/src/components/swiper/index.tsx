import { useEffect, useState } from 'react';
import { useComponent } from '../../hooks';
import { getEnv } from '@brushes/api';

interface SwiperType<T> {
    indicatorDots?: boolean;
    direction?: 'horizontal' | 'vertical';
    autoplayInterval: number;
    loop?: boolean;
    type: number;
    render: Function;
    style: { [v: string]: unknown };
    data: Array<T>;
    imgHeight: { height: number; width: number };
    [v: string]: unknown;
}

export function SmoothSwiper<T>({
    indicatorDots = true,
    direction = 'horizontal',
    autoplayInterval,
    loop = true,
    data,
    type,
    render,
    style,
    imgHeight,
    ...props
}: SwiperType<T>) {
    const { Swiper, SwiperItem } = useComponent();
    const [swiperProps, setSwiper] = useState({});
    const isTaro = getEnv();
    const SwiperItemComponent = Swiper?.Item || SwiperItem;
    useEffect(() => {
        let propsStyle = {};
        if (isTaro) {
            const sysInfo = wx.getSystemInfoSync();
            const deviceW = sysInfo.windowWidth;
            propsStyle = {
                vertical: direction !== 'horizontal',
                interval: autoplayInterval,
                indicatorColor: '#999',
                indicatorActiveColor: '#333',
                circular: loop,
                indicatorDots,
                style: {
                    ...style,
                    height: type == 1 ? Math.floor((deviceW * imgHeight.height) / imgHeight.width) : ''
                }
            };
        } else {
            propsStyle = {
                direction,
                autoplayInterval,
                loop,
                style
            };
        }
        setSwiper(propsStyle);
    }, [direction, autoplayInterval, loop, indicatorDots]);

    return (
        <Swiper {...{ ...swiperProps, ...props }}>
            {data.map((item: T, index: number) => (
                <SwiperItemComponent key={index}>{render(item)}</SwiperItemComponent>
            ))}
        </Swiper>
    );
}
