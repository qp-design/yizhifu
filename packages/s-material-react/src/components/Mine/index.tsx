import {FC, memo} from 'react';
import {useComponent, IconMobile} from '@brushes/qj-simulate-component';
import {getEnv} from '@brushes/api';
import {OrderEntry} from './components/orderEntry';
import {MenuList} from './components/menuList';

interface MineType {
  avatarStyle: number;
  banner: number;
}

const MineJsx: FC<MineType> = ({avatarStyle, banner}) => {
  const {View, Text} = useComponent();
  const flag = getEnv();

  return (
    <View
      className={'mine'}
      style={{
        height: flag ? '100%' : '667px'
      }}
    >
      <View className={'topBoard'}>
        <IconMobile value={'shezhi'}/>
        <IconMobile value={'kehufuwukefu'}/>
      </View>

      <View className={'userSetting'}>
        <View className={'lPart'}>
          <Text className={'name'}>张三</Text>
          <View className={'link'}>{'编辑个人资料 >'}</View>
        </View>
        <img src="" alt="" className={'avatar'} style={{borderRadius: avatarStyle ? '50%' : '2px'}}/>
      </View>

      <OrderEntry/>

      <MenuList/>

      {banner ? <img className={'banner'} src="" alt=""/> : null}
    </View>
  );
};

export const Mine = memo(MineJsx);
