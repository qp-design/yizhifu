export const config = [
  {
    id: 1,
    label: '基础组件',
    children: [
      {
        id: 1,
        type: 'Texts',
        name: '文本',
        icon: 'icon-tupian_huaban',
        group: [
          {
            id: 1,
            label: '主标题',
            icon: 'icon-tupian_huaban'
          },
          {
            id: 2,
            label: '副标题',
            icon: 'icon-tupian_huaban'
          },
          {
            id: 3,
            label: '正文标题',
            icon: 'icon-tupian_huaban'
          },
        ],
        props: {
          defaultValue: [
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

      {
        id: 2,
        type: 'Goods',
        name: '商品',
        icon: 'icon-shangpin-xianxing',
        group: [
          {
            id: 1,
            label: '主打商品',
            icon: 'icon-shangpin-xianxing'
          },
          {
            id: 2,
            label: '副商品',
            icon: 'icon-shangpin-xianxing'
          }
        ],
        props: {
          defaultValue: [
            {
              goodsCode: 1,
              goodsName: '默认标题',
              brandName: '千匠网络',
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
      {
        id: 3,
        type: 'live',
        name: '直播',
        icon: 'icon-zhibo',
        group: [],
        props: {}
      },
      {
        id: 4,
        type: 'coupon',
        name: '优惠券',
        icon: 'icon-youhuiquan',
        group: [],
        props: {}
      }
    ],
  },
]
