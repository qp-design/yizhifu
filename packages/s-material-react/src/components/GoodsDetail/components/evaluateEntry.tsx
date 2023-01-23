import { useComponent } from '@brushes/qj-simulate-component';
import EvaluateItem from '../../../common/evaluateItem';

const fake = [
    {
        avatar: 'http://www.qianjiangcloud.com/images/centerimga/pic%EF%BC%8Flogo+@2x.png',
        userName: '张三李四王五',
        rate: 4.5,
        size: '一大通',
        evaluate:
            '实物与描述的一样，质量相当好，卖家态度也好，有问必答，发货速度杠杠的，值得购买哦。外观设计漂亮，尺寸大小合适，包装仔细完整，宝贝手感不错，感觉很好，发货速度快，服务态度一流，给力！5星好评！',
        imgUrls: [
            {
                imgUrl: 'https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg'
            },
            {
                imgUrl: 'https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg'
            },
            {
                imgUrl: 'https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg'
            },
            {
                imgUrl: 'https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg'
            }
        ]
    },
    {
        avatar: 'http://www.qianjiangcloud.com/images/centerimga/pic%EF%BC%8Flogo+@2x.png',
        userName: '张三李四王五',
        rate: 4.5,
        size: '一大通',
        evaluate:
            '实物与描述的一样，质量相当好，卖家态度也好，有问必答，发货速度杠杠的，值得购买哦。外观设计漂亮，尺寸大小合适，包装仔细完整，宝贝手感不错，感觉很好，发货速度快，服务态度一流，给力！5星好评！',
        imgUrls: [
            {
                imgUrl: 'https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg'
            }
        ]
    }
];

const EvaluateEntry = () => {
    const { View, Text } = useComponent();

    return (
        <View className={'evaluateEntry'}>
            <View className={'topInfo'}>
                <Text className={'title'}>评价（109）</Text>
                <View>
                    <Text className={'txt'}>好评度 99%</Text>
                </View>
            </View>

            {fake.map((item, index) => (
                <EvaluateItem itemData={item} key={index} />
            ))}

            {/*<View className={'evaluateIem'}>*/}
            {/*  <View className={'userInfo'}>*/}
            {/*    <img src={img} className={'avatar'} />*/}
            {/*    <Text className={'userName'}>水电费第三方</Text>*/}
            {/*  </View>*/}
            {/*  <View className={'size'}>*/}
            {/*    规格： 123123123424*/}
            {/*  </View>*/}
            {/*  <View className={'content'}>*/}
            {/*    实物与描述的一样，质量相当好，卖家态度也好，有问必答，发货速度杠杠的，值得购买哦。外观设计漂亮，尺寸大小合适，包装仔细完整，宝贝手感不错，感觉很好，发货速度快，服务态度一流，给力！5星好评！*/}
            {/*  </View>*/}
            {/*  <View className={'img-group'}>*/}
            {/*    <img src={img} className={'img'}/>*/}
            {/*  </View>*/}
            {/*</View>*/}
        </View>
    );
};

export default EvaluateEntry;
