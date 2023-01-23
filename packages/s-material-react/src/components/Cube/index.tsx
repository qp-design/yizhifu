import React, { memo, useEffect, useState } from 'react';
import { useComponent } from '@brushes/qj-simulate-component';
import { _ } from '@brushes/tools';

const { isUndefined, isEmpty } = _;

interface ImgType {
    imgUrl: string;
    link: string;
}

interface CubeType {
    defaultValue: Array<ImgType>;
    type: number;
    borderRadius: number;
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
    selectImg: Array<ImgType>;
}

const CubeJsx: React.FC<CubeType> = ({
    defaultValue,
    type,
    borderRadius,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    selectImg
}) => {
    const [list, setList] = useState(defaultValue);
    const { View, Image } = useComponent();
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
                paddingBottom
            }}
        >
            <View className={`cube-type${type}`} style={{ paddingLeft, paddingRight }}>
                {list.map((item, index) => {
                    return type === 1 ? (
                        <Image
                            key={index}
                            mode={'widthFix'}
                            src={item.imgUrl}
                            style={{
                                width: '100%',
                                borderRadius: borderRadius + 'px'
                            }}
                        />
                    ) : (
                        <View
                            className={'block'}
                            style={{
                                backgroundImage: `url(${item.imgUrl})`,
                                width: '100%',
                                borderRadius: borderRadius + 'px'
                            }}
                            key={index}
                            onClick={() => {
                                if (process.env.TARO_ENV === 'weapp') {
                                    // Taro?.navigateTo({
                                    //   url: item.link,
                                    // })
                                }
                            }}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export const Cube = memo(CubeJsx);
