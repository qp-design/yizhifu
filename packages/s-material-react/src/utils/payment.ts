import {
  addShoppingGoods, // 再次购买--加入购物车
  addShoppingGoodsBySpec, // 检查库存是否足够
  queryToContract,    // 商品详情页直接下单
  getTotalDiscountPrice // 用户权益差价计算
} from '@brushes/api';

export {
  updateShoppingGoodsNum, // 更新购物车数量
  queryShoppingToContract, // 购物车到订单
  saveContract, // 增加订单服务
  syncContractState, // 查询订单是否创建成功 (单条)
  saveOrderToPay, // 获取支付方式
  paymentCommit, // 开始支付
  syncContractPayState, // 查看商品是否支付成功
  calculateFreightFare, // 计算运费
  getFalgSettingForPaydate, //	普通商品查询自动取消订单时间
  queryAddressBymerberCode, // 获取收货地址
} from '@brushes/api';

// 规格校验
export const checkSkuSpec = async (spec:string, goodsCode:string) => {
  const payload = {
    specStr: `[${spec}]`,
    goodsCode
  }
  return await addShoppingGoodsBySpec(payload);
}

export const addCardSku = async (skuId: string, count: number) => {
  const payloadNext = {
    skuId,
    goodsNum: count
  }
  // 再次购买--加入购物车
  return await addShoppingGoods(payloadNext);
}



export const queryToContractImpl = async (skuId?: string, goodsNum?: number | string) => {
  const payloadNext = {
    skuId,
    goodsNum
  }
  // 直接结算页面
  return await queryToContract(payloadNext);
}


export const getTotalDiscountPriceImpl = async (payloadNext:any) => {
  // const payloadNext = {
  //
  // }

  // 用户权益差价计算
  return await getTotalDiscountPrice(payloadNext);
}
