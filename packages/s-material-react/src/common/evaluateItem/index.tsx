import { useComponent } from '@brushes/qj-simulate-component';
import { Rate } from 'antd-mobile';

const EvaluateItem = ({ starColor = '#FF0934', starSize = '12px', itemData }: any) => {
    const { View, Text, Image } = useComponent();
    return (
        <View className={'evaluateItem'}>
            <View className={'userInfo'}>
                <Image src={itemData.avatar} className={'avatar'} />
                <View className={'userNameWrap'}>
                    <Text className={'userName'}>{itemData.userName}</Text>
                    <Rate
                        readOnly
                        value={itemData.rate}
                        style={{
                            '--star-size': starSize,
                            '--active-color': starColor
                        }}
                    />
                </View>
            </View>
            <View className={'size'}>规格： {itemData.size}</View>
            <View className={'content'}>{itemData.evaluate}</View>
            <View className={'img-group'}>
                {itemData.imgUrls.map((item: any, index: number) => {
                    return <Image src={item.imgUrl} className={'img'} key={index} />;
                })}
            </View>
        </View>
    );
};

export default EvaluateItem;
