import {useComponent, IconMobile} from '@brushes/qj-simulate-component';
import { _ } from '@brushes/tools';
import {useMemo} from 'react';

const { isEmpty } = _;

export interface AddressType {
  provinceName: string;
  cityName:string;
  areaName:string;
  addressDetail:string;
  addressMember:string;
  addressPhone:string;
  addressDefault: string
}

interface ExtendType {
  address: string
  addressMember:string;
  addressPhone:string;
  addressDefault: boolean
}

export const Address = ({address}: {address: AddressType}) => {
  return (
    <>
      {
        isEmpty(address) ? <NoAddress/> : <DefaultAddress address={address}/>
      }
    </>
  )
}

const DefaultAddress = ({address}: {address: AddressType}) => {
  const { View, Text } = useComponent();
  const addressInfo : ExtendType = useMemo(() => {
    const { provinceName, addressDefault, cityName, areaName, addressDetail, addressMember = '', addressPhone = '' } = address;
    return {
      addressDefault: addressDefault === '1',
      addressMember,
      addressPhone,
      address: provinceName + cityName + areaName + addressDetail
    }
  }, [address]);

  return (
      <View className="address-info">
        <IconMobile
          style={{
            fontWeight: 900,
            color: '#444',
            lineHeight: 3.2,
          }}
          value={'shouhuodizhi'}
        />

        <View className="left">
          <View className='left-title'>
            <Text>{addressInfo.addressMember}</Text>
            <Text className={'left-padding'}>{ addressInfo.addressPhone }</Text>
            <Text className={'left-padding left-title-default'}>{ addressInfo.addressDefault ? '默认' : '' }</Text>
          </View>
          <View className="left-detail">
            { addressInfo.address }
          </View>
        </View>

        <IconMobile
          value={'xiangyou1'}
          style={{
            color: '#444',
            lineHeight: 3,
            textAlign: 'right',
          }}
        />
      </View>
  )
}

const NoAddress = () => {
  const { View, Text } = useComponent()
  return (
    <>
      <View className={'group'}>
        <Text className={'local'}></Text>
        <Text className={'address'}>选择收货地址</Text>
      </View>
      <Text className={'arrow'}></Text>
    </>
  )
}
