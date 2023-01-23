
import {makeStore} from 'qj-mobile-store';

interface Cart {
  count: number;
  select: string[];
}

type actionName =
  | 'plus'
  | 'minus'
  | 'select'

type ActionInterface = {
  type: actionName;
  payload: Cart
}

const defaultValues = {
  count: 1,
  select: []
};

function reduceImpl(state: Cart, action: ActionInterface) {
  switch (action.type) {
    case 'select':
      return { ...state, select: action.payload }
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
export {
  StoreProvider, useStore, useDispatchImpl
}
