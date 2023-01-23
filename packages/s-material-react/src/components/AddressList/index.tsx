import {memo} from 'react';
import {navigatorImpl, useComponent} from '@brushes/qj-simulate-component';
import {getEnv} from '@brushes/api';
import {AddressItem} from '../../common/addressItem';
import {useAddressList} from "./hooks";
import {routerMap} from "../../routerMap";
import {Skull} from "./components";


const AddressListJsx = () => {
  const {View} = useComponent();
  const flag = getEnv();
  const {list, delAddress, setDefault, skullShow} = useAddressList();

  return (
    <View className={'addressListWrap'} style={{
      height: flag ? 'inherit' : '667px'
    }}>
      {
        skullShow ? <Skull/> :
          <View className={'addressList'}>
            {list.map((item, index) => (
              <AddressItem
                itemData={item}
                key={item?.addressId}
                setDefault={setDefault.bind(null, item, index)}
                delAddress={delAddress.bind(null, item)}
              />
            ))}
          </View>
      }
      <View className={'addBtnWrap'}>
        <View className={'addBtn'} onClick={() => navigatorImpl(`${routerMap.addressEditor}`)}>+ 新增地址</View>
      </View>
    </View>
  );
};

export const AddressList = memo(AddressListJsx);
