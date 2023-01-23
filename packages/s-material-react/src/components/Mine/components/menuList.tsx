import {useRef} from 'react';
import {useComponent, IconMobile} from '@brushes/qj-simulate-component';

export const MenuList = () => {
  const {View, Text} = useComponent();

  const config = useRef([
    {
      icon: 'youhuiquan',
      label: '优惠券',
      link: ''
    },
    {
      icon: 'dizhi',
      label: '地址管理',
      link: ''
    }
  ]);

  return (
    <View className={'menuList'}>
      {config.current.map((item, idx) => {
        return (
          <View key={idx} className={'menuListItem'}>
            <View className={'lPart'}>
              <IconMobile value={item.icon}/>
              <Text className={'label'}>{item.label}</Text>
            </View>
            <IconMobile value={'xiangyou1'}/>
          </View>
        );
      })}
    </View>
  );
};
