const materials = {
  TITLE: {
    type: 'Title',
    name: '文本',
    icon: 'icon-tupian_huaban',
    props: {
      value: '请填写主标题或文本',
      fontSize: 20,
      textAlign: 'left',
      color: '#000000',
      backgroundColor: '#fafafa',
      fontWeight: 'normal',
      textDecoration: 'none',
      fontStyle: 'normal',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 0
    },
  },
  GOODS: {
    type: 'Goods',
    name: '商品',
    icon: 'icon-shangpin-xianxing',
    props: {
      defaultValue: [
        {
          goodsCode: 1,
          goodsName: '默认标题',
          brandName: '123网络',
          pricesetNprice: 1000,
          pricesetMakeprice: 1,
          dataPic: 'https://s3.bmp.ovh/imgs/2022/08/25/834678ee2d82e991.png'
        }
      ],
      goods: [],
      cell: 1,
      circular: 1,
      margin: 8,
      markedPrice: 1
    }
  },
  LIVE: {
    type: 'live',
    name: '直播',
    icon: 'icon-zhibo',
    props: {}
  },
  COUPON: {
    type: 'coupon',
    name: '优惠券',
    icon: 'icon-youhuiquan',
    props: {}
  },
}

export const materialsList = Object.values(materials);
