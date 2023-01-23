import { useComponent } from '@brushes/qj-simulate-component';
import { Rate } from 'antd-mobile';

const img = 'http://www.qianjiangcloud.com/images/centerimga/pic%EF%BC%8Flogo+@2x.png';

const EvaluateList = ({ starColor = '#FF0934', starSize = '12px' }) => {
    const { View, Text } = useComponent();

    return (
        <View className={'evaluateList'}>
            <View className={'topInfo'}>
                <Text className={'title'}>评价（109）</Text>
                <View>
                    <Rate
                        readOnly
                        value={4.5}
                        style={{
                            '--star-size': starSize,
                            '--active-color': starColor
                        }}
                    />
                    <Text className={'txt'}>4分</Text>
                </View>
            </View>

            <View className={'evaluateList-item'}>
                <View className={'userInfo'}>
                    <img src={img} className={'avatar'} />
                    <Text className={'userName'}>水电费第三方</Text>
                </View>
                <View className={'size'}>规格： 123123123424</View>
                <View className={'content'}>
                    实物与描述的一样，质量相当好，卖家态度也好，有问必答，发货速度杠杠的，值得购买哦。外观设计漂亮，尺寸大小合适，包装仔细完整，宝贝手感不错，感觉很好，发货速度快，服务态度一流，给力！5星好评！
                </View>
                <View className={'img-group'}>
                    <img src={img} className={'img'} />
                </View>
            </View>
        </View>
    );
};

export default EvaluateList;
