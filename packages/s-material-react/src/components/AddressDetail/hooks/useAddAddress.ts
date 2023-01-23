import {useEffect, useState} from "react";
import {getAddress, saveAddress} from '@brushes/api';

const userCode = '00000017';

export function useEditAddress(addressId: string | undefined, Form: any) {
  const [form] = Form.useForm();
  const [defaultAddress, setDefaultAddress] = useState('1');
  const [skullShow, setSkullShow] = useState(true);
  const [area, setArea] = useState({
    provinceCode: '',
    provinceName: '',
    cityCode: '',
    cityName: '',
    areaCode: '',
    areaName: ''
  });

  useEffect(() => {
    if(addressId) {
      initForm()
    }else {
      form.setFieldValue('addressDefault', defaultAddress);
      setSkullShow(false);
    }
  }, [])

  const initForm = () => {
    getAddress({addressId}).then((res: any) => {
      const resultArea = {
        provinceCode: res.provinceCode,
        cityCode: res.cityCode,
        areaCode: res.areaCode,
        provinceName: res.provinceName,
        cityName: res.cityName,
        areaName: res.areaName
      }
      setArea(resultArea);
      setDefaultAddress(res.addressDefault)
      form.setFieldValue('addressMember', res.addressMember);
      form.setFieldValue('addressPhone', res.addressPhone);
      form.setFieldValue('addressDetail', res.addressDetail);
      form.setFieldValue('area', resultArea);
      form.setFieldValue('addressDefault', res.addressDefault);
      form.validateFields();
      setSkullShow(false);
    })
  }

  const handleArea = (val: any) => {
    const codeArr = val.detail.code;
    const nameArr = val.detail.value;
    const result = {
      provinceCode: codeArr[0],
      cityCode: codeArr[1],
      areaCode: codeArr[2],
      provinceName: nameArr[0],
      cityName: nameArr[1],
      areaName: nameArr[2]
    }
    setArea(result)
    form.setFieldValue('area', result);
    form.validateFields()
  }

  const handleFinish = (data: any) => {
    const result = Object.assign(data, data.area);
    delete result.area;
    saveAddress({...result, userCode})
  };

  const handleDefaultAddress = (result: any) => {
    setDefaultAddress(result.detail.value ? '1' : '0');
  }

  return {
    skullShow,
    form,
    area,
    setArea,
    userCode,
    defaultAddress,
    handleArea,
    handleDefaultAddress,
    handleFinish
  }
}
