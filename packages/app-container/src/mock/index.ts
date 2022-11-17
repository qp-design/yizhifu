export const routers = [
  {
    menu: '首页',
    id: 1000,
    router: 'index',
    children: [
      {
        menu: '商品列表',
        id: '010',
        router: 'goodList'
      },
      {
        menu: '搜索',
        id: '011',
        router: 'search'
      },
      {
        menu: '商品详情',
        id: '012',
        router: 'goodDetail'
      },
      {
        menu: '确定订单',
        id: '013',
        router: 'orderConfirm'
      },
      {
        menu: '支付结果',
        id: '014',
        router: 'result'
      },
      {
        menu: '商品评价',
        id: '016',
        router: 'rate'
      },
      {
        menu: '商品评价详情',
        id: '017',
        router: 'rateDetail'
      },
      {
        menu: '购物列表',
        id: '018',
        router: 'shopList'
      },
      {
        menu: '订单列表',
        id: '018',
        router: 'shopList'
      },
      {
        menu: '订单详情',
        id: '019',
        router: 'orderDetail'
      },
      {
        menu: '发布评论',
        id: '020',
        router: 'publishRate'
      },
      {
        menu: '优惠券列表',
        id: '021',
        router: 'couponList'
      },
      {
        menu: '地址列表',
        id: '022',
        router: 'addressList'
      },
      {
        menu: '新增编辑地址',
        id: '023',
        router: 'addressEditor'
      },
    ]
  },
  {
    menu: '商品分类',
    id: '002',
    router: 'classify'
  },
  {
    menu: '购物车',
    id: '003',
    router: 'buy'
  },
  {
    menu: '我的',
    id: '004',
    router: 'my'
  }
]
