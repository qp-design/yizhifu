import { useEffect, useState } from 'react';
import { memo } from 'react';
import { SmoothSwiper, View } from '@brushes/qj-simulate-component';
import { getEnv } from '@brushes/api';
import { _ } from '@brushes/tools';
import { Items } from './item';

const { isUndefined, isEmpty } = _;

export interface itemType {
    imgUrl: string;
    link: string;
}

interface SwiperType {
    defaultValue?: Array<itemType>;
    type?: number;
    autoplay?: boolean;
    autoplayInterval?: number;
    direction?: 'horizontal' | 'vertical';
    loop?: boolean;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    selectImg?: Array<itemType>;
    imgHeight?: { height: number; width: number };
}

const SwiperJsx: React.FC<SwiperType> = ({
    defaultValue = [],
    type,
    autoplay,
    autoplayInterval,
    direction,
    loop,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    selectImg,
    imgHeight
}) => {
    const [list, setList] = useState(defaultValue);

    useEffect(() => {
        const computedArr = selectImg
            .filter((item) => !isUndefined(item))
            .filter((item) => !Object.values(item).every((citem) => isUndefined(citem)));
        let arr = defaultValue;
        if (!isEmpty(computedArr)) {
            arr = computedArr;
        }

        setList(arr);
    }, [selectImg]);

    return (
        <View
            style={{
                paddingTop,
                paddingBottom,
                paddingLeft,
                paddingRight
            }}
        >
            <SmoothSwiper<itemType>
                className={getEnv() ? 'slider-block' : 'pc'}
                imgHeight={imgHeight}
                data={list}
                type={type}
                autoplay={autoplay}
                autoplayInterval={autoplayInterval}
                direction={direction}
                loop={loop}
                render={(item: itemType) => <Items type={type} item={item} />}
            />
        </View>
    );
};

export const Slider = memo(SwiperJsx);
