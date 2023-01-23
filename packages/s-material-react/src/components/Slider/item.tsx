import { memo } from 'react';
import { itemType } from './index';
import { useComponent } from '@brushes/qj-simulate-component';
import { getEnv } from '@brushes/api';

export const Items = memo(({ item, type }: { item: itemType; type: number }) => {
    const { Image, View } = useComponent();
    return (
        <>
            {type === 1 ? (
                <Image
                    mode={'widthFix'}
                    src={item.imgUrl}
                    style={{
                        width: '100%'
                    }}
                />
            ) : (
                <View
                    className={getEnv() ? 'slider-block' : 'pc'}
                    style={{
                        backgroundImage: `url(${item.imgUrl})`,
                        width: '100%'
                    }}
                ></View>
            )}
        </>
    );
});
