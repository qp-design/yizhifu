
import {makeStore} from 'qj-mobile-store';

interface GoodsDetailType {
  count: number;
  spec: string;
  price: number;
  couponValue: number | string;
  popupVisible: boolean;
  isNeedButton: boolean;
  goodsNum: number,
  goodsCode: string,
  orderType: number,
}

type actionName =
  | 'plus'
  | 'minus'
  | 'select'
  | 'popupImpl'
  | 'initGoods'

type ActionInterface = {
  type: actionName;
  payload: GoodsDetailType
}

const defaultValues = {
  count: 1,
  orderType: 0,
  isNeedButton: false,
  popupVisible: false,
  goodsNum: 1,
  goodsCode: ''
};

function reduceImpl(state: GoodsDetailType, action: ActionInterface) {
  switch (action.type) {
    case 'plus':
      return {...state, count: state.count + 1};
    case 'minus':
      return {...state, count: state.count - 1};
    case 'select':
    case 'initGoods':
    case 'popupImpl':
      return {...state, ...action.payload};
    default:
      return state
  }
}
/**
 * =========== StoreProvider, useStore, useDispatchImpl ============
 * 导出三个参数
 * 第一个是Provider
 * 第二个是Store
 * 第三个是Dispath
 *
 */
const [StoreProvider, useStore, useDispatchImpl] = makeStore(reduceImpl, defaultValues)
// demo
export {
  StoreProvider, useStore, useDispatchImpl
}
