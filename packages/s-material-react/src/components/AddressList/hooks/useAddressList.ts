import {useEffect, useState} from "react";
import {deleteAddress, queryAddressBymerberCode, updateAddress} from '@brushes/api';


export function useAddressList() {
  const [list, setList] = useState<Array<any>>([]);
  const [skullShow, setSkullShow] = useState(true);
  useEffect(() => {
    getAddressList()
  }, [])

  const getAddressList = async () => {
    const resList = await queryAddressBymerberCode();
    setList(resList)
    setSkullShow(false);
  }

  const delAddress = (addressInfo: object) => {
    wx?.showModal({
      title: '提示',
      content: '确认删除该地址吗？',
      success: async (res: object) => {
        if (res?.confirm) {
          await deleteAddress({addressId: addressInfo.addressId});
          await getAddressList();
        }
      }
    })
  }

  const setDefault = async (addressInfo: any, index: number) => {
    if (addressInfo.addressDefault !== '1') {
      const {
        addressMember,
        addressPhone,
        provinceCode,
        provinceName,
        cityCode,
        cityName,
        areaCode,
        areaName,
        addressDetail,
        addressId,
        addressCode,
        dataState
      } = addressInfo;

      const params = {
        addressMember,
        addressPhone,
        provinceCode,
        provinceName,
        cityCode,
        cityName,
        areaCode,
        areaName,
        addressDetail,
        addressId,
        addressCode,
        dataState,
        addressDefault: '1'
      }
      setList(replaceArr(index, list))

      await updateAddress(params);
      await getAddressList();
    }
  }

  const replaceArr = (coe: number, arr: any) => {
    const chooseItem = arr[coe];
    console.log(chooseItem)
    arr[coe] = arr[0];
    arr[coe].addressDefault = '0'
    arr[0] = chooseItem;
    arr[0].addressDefault = '1'
    console.log(111111, arr);
    return [...arr]
  }

  return {
    list,
    skullShow,
    delAddress,
    setDefault
  }
}
