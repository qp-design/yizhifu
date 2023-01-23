import {useDispatchImpl, useStore} from '../store';
import { _ } from '@brushes/tools';
import {checkSkuSpec, addCardSku} from '../../../utils/payment';
import {navigatorImpl} from '@brushes/qj-simulate-component';
import {routerMap} from '../../../routerMap';

const { get } = _;

export function useAddShopping() {
  const { count, spec, orderType, popupVisible, isNeedButton, goodsCode } = useStore();
  const dispatch = useDispatchImpl();

  const handleChooseSize = (value: string) => {
    dispatch({
      type: 'select',
      payload: {
        spec: value,
      }
    })
  };

  const popupHandler = () => {
    dispatch({
      type: 'popupImpl',
      payload: {
        popupVisible: !popupVisible,
      }
    })
  }

  const handleStep = (type: string) => {
    dispatch({
      type,
    })
  };

  const addCardImpl = async () => {
    try {
      const data = await checkSkuSpec(spec, goodsCode);
      const skuId = get(data, 'dataObj.skuId');
      await addCardSku(skuId, count)
      popupHandler();
    } catch (err) {

    }
  }

  const cashImpl = async () => {
    const data = await checkSkuSpec(spec, goodsCode);
    const skuId = get(data, 'dataObj.skuId');
    navigatorImpl(`${routerMap.confirm}?skuId=${skuId}&goodsNum=${count}`)
  }

  const addShoppingImpl = () => {
    if(orderType === 0) {
      // 添加到购物车
      addCardImpl()
    } else {
      // 去支付页面
      cashImpl()
    }
  }

  return {
    count,
    spec,
    popupVisible,
    isNeedButton,
    handleChooseSize,
    handleStep,
    addShoppingImpl,
    popupHandler
  }
}
