
const materials = {
  TEXTS: {
    type: 'Texts',
    name: '文本',
    icon: 'icon-tupian_huaban',
    props: {
      value: [
        {
          title: '默认标题',
          subTitle: '千匠网络',
        }
      ],
      cell: 1,
      circular: 1,
      margin: 8,
      markedPrice: 1
    }
  },
  GOODS: {
    type: 'Goods',
    name: '商品',
    icon: 'icon-shangpin-xianxing',
    props: {
      value: [
        {
          goodsCode: 1,
          goodsName: '默认标题',
          brandName: '千匠网络',
          pricesetNprice: 1000,
          pricesetMakeprice: 1,
          dataPic: 'https://s3.bmp.ovh/imgs/2022/08/25/834678ee2d82e991.png'
        }
      ],
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
