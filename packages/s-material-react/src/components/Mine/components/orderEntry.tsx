import {navigatorImpl, useComponent, IconMobile} from '@brushes/qj-simulate-component';
import {getContractNumbers} from '@brushes/api';
import {useEffect, useRef} from 'react';
import {routerMap} from '../../../routerMap';

export const OrderEntry = () => {
  const {View, Text, Badge} = useComponent();

  useEffect(() => {
    getContractNumbers().then((res: any) => {
      console.log('----------', res);
    })
  }, [])

  const config = useRef([
    {
      badge: 5,
      label: '待付款',
      icon: 'daifukuan',
      link: ''
    },
    {
      badge: 0,
      label: '待发货',
      icon: 'daifahuo',
      link: ''
    },
    {
      badge: 0,
      label: '待收货',
      icon: 'daishouhuo',
      link: ''
    },
    {
      badge: 0,
      label: '已完成',
      icon: 'yiwancheng',
      link: ''
    },
    {
      badge: 0,
      label: '退换/售后',
      icon: 'shouhou',
      link: ''
    }
  ]);

  return (
    <View className={'orderEntry'}>
      <View className={'title'}>
        <View className={'name'}>我的订单</View>
        <View className={'more'} onClick={() => navigatorImpl(routerMap.order)}>
          查看全部
        </View>
      </View>
      <View className={'content'}>
        {config.current.map((item, index) => (
          <View
            onClick={() => navigatorImpl(`${routerMap.order}?id=${index + 1}`)}
            className={'contentItem'}
            key={index}
          >
            {item.badge ? (
              <Badge content={item.badge} color={'#000'} style={{color: '#fff', fontSize: 12}}>
                {/*<Image src={item.icon} mode={'widthFix'} className={'icon'}/>*/}
                <IconMobile value={item.icon} />
              </Badge>
            ) : (
              // <Image src={item.icon} mode={'widthFix'} className={'icon'}/>
              <IconMobile value={item.icon} />
            )}
            <Text className={'subTitle'}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
