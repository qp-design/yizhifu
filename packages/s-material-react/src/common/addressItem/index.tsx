import {useComponent, IconMobile, navigatorImpl} from '@brushes/qj-simulate-component';
import {getEnv} from '@brushes/api';
import {routerMap} from "../../routerMap";

export const AddressItem = ({itemData, delAddress, setDefault, fontSize = '12px', iconSize = '12px'}: any) => {
  const {View, Text} = useComponent();
  const flag = getEnv();

  return (
    <View className={'addressItem'}>
      <View className={'upInfo'} onClick={() => navigatorImpl(`${routerMap.addressEditor}?addressId=${itemData.addressId}`)}>
        <View className={'userInfo'}>
          {itemData.addressMember} {itemData.addressPhone}
        </View>
        <View className={'addressInfo'}>
          <Text className={'address'}>
            {itemData.provinceName} {itemData.areaName} {itemData.cityName} {itemData.addressDetail}
          </Text>
          {/*<View className={'icon'}></View>*/}
          <IconMobile value={'bianjishuru'}/>
        </View>
      </View>
      <View className={'downInfo'}>
        {
          flag ?
            <label className="checkboxMini">
              <checkbox-group onChange={setDefault} class={'checkBoxWrap'}>
                <checkbox value="cb" checked={itemData?.addressDefault === '1'}/>
                设为默认地址
              </checkbox-group>
            </label> : <div className={'checkBoxPc'}><input type="checkbox"
                                                            checked={itemData.addressDefault === '1'}/><label>设为默认地址</label>
            </div>
        }
        <Text className={'del'} onClick={delAddress}>删除</Text>
      </View>
    </View>
  );
};
