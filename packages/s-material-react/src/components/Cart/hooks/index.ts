import {useEffect, useMemo, useState, useRef} from 'react';
import {queryShoppingPage} from '@brushes/api';
import { _ } from '@brushes/tools';
import {useDispatchImpl, useStore} from '../store';
import {updateShoppingGoodsNum} from '../../../utils/payment';
import {navigatorImpl} from '../../../../../simulate-component';
import {routerMap} from '../../../routerMap';
const { get } = _;

export function useCartList() {
  const dispatch = useDispatchImpl();
  const { select } = useStore();
  const allCart = useRef([]);
  const [cartList, setCartList] = useState({
    shoppingGoodsList: [],
    disMoney: 0
  });

  useEffect(() => {
    (async () => {
      await initImpl('isFirst');
    })()
  }, []);

  const updateImpl = async (id: number, count: number) => {
    try{
      await updateShoppingGoodsNum({
        shoppingGoodsId: id,
        amount: count,
        goodWeight: 0
      })
      await initImpl()
    } catch (err) {
      console.log(err)
    }
  };

  const initImpl = async (isFirst: string = '') => {
    const data = await queryShoppingPage();
    const cart = get(data, 'rows[0].shoppingpackageList[0]', {
      shoppingGoodsList: [],
      // sumMoney: 0,
      disMoney: 0
    })
    allCart.current = cart.shoppingGoodsList.map(item => item.shoppingGoodsId + '');
    if(isFirst) {
      dispatch({
        type: 'select',
        payload: allCart.current
      })
    }
    setCartList(cart)
  }

  const amount = useMemo(() => {
    let num = 0, amount = 0;
    cartList.shoppingGoodsList.forEach(item => {
      if(select.includes(item.shoppingGoodsId+'')) {
        num += item.goodsCamount;
        amount += item.goodsCamount * item.pricesetNprice
      }
    })
    return {
      num,
      amount,
    }
  }, [select, cartList]);

  const selectAll = (e: { detail: { value: string[] }}) => {
    dispatch({
      type: 'select',
      payload: e.detail.value.includes('true') ? allCart.current : []
    })

  }

  const toOrderImpl = () => {
    navigatorImpl(`${routerMap.confirm}?shoppingGoodsId=${select.join(',')}`)
  }

  return {
    cartList,
    amount,
    selectAll,
    allCart,
    updateImpl,
    toOrderImpl
  }
}
