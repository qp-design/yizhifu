import { useComponent } from '@brushes/qj-simulate-component';
import { useEffect, useState } from 'react';

const GoodsDetailInfo = ({ tabActive, goods }: any) => {
    const { View } = useComponent();
    const [goodsDetail, setDetail] = useState('');
    useEffect(() => {
        setDetail(
            goods.goodsRemark
                .replace(/<style>[\s\S]*<\/style>/gi, '')
                .replace(/\<img/gi, `<img class="mystyle" mode="widthFix"`)
                .replace(/<!--[\s\S]*-->/gi, '')
        );
    }, [goods.goodsRemark, tabActive]);

    return (
        <View className={'goodsDetail-info'}>
            <div dangerouslySetInnerHTML={{ __html: goodsDetail || '' }}></div>
        </View>
    );
};

export default GoodsDetailInfo;
