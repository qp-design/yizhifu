const checkMobile = (_, value: any) => {
  return new Promise((resolve, reject) => {
    if (!/^1[3456789]\d{9}$/.test(value) && value) {
      reject('请输入正确手机号');
    } else {
      resolve('');
    }
  });
};


export const config = [
  {
    type: 'input',
    props: {
      onlyShowClearWhenFocus: true,
      placeholder: '请填写收货人姓名'
    },
    label: '收货人',
    name: 'addressMember',
    rules: [{required: true, message: '收货人姓名不能为空'}]
  },
  {
    type: 'input',
    props: {
      type: 'number',
      onlyShowClearWhenFocus: true,
      placeholder: '请填写收货人手机号码'
    },
    label: '手机号码',
    name: 'addressPhone',
    rules: [{required: true, message: '收货人手机号码不能为空'}, {validator: checkMobile}]
  },
  {
    type: 'cascader',
    label: '所在地区',
    name: 'area',
    rules: [{required: true, message: '所在地区不能为空'}]
  },
  {
    type: 'input',
    props: {
      onlyShowClearWhenFocus: true,
      placeholder: '街道/楼牌号等'
    },
    label: '详细地址',
    name: 'addressDetail',
    rules: [{required: true, message: '收货人详细地址不能为空'}]
  },
  // {
  //   type: 'input',
  //   props: {
  //     type: 'number',
  //     onlyShowClearWhenFocus: true,
  //     placeholder: '请填写邮政编码'
  //   },
  //   label: '邮政编码',
  //   name: 'zipCode'
  // },
  {
    type: 'switch',
    props: {
    },
    label: '设置默认地址',
    name: 'addressDefault'
  }
]
