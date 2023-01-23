import {reactive, watch} from 'vue';
import { _ } from '@brushes/tools';
import { querySkuNotOnShelf } from '@brushes/api'
import {goodItem} from '../components';
const { isEqual, isEmpty } = _;


interface GoodsState {
  list: Array<goodItem>
}

export function useGoodsWx(props: Record<any, any>) {
  const state = reactive<GoodsState>({
    list: props.value,
  });

  watch(
    () => props.goods,
    (goods, prevgoods) => {
      if(isEqual(prevgoods, goods)) return;

      if(isEmpty(goods)) {
        state.list = props.defaultValue
        return
      }

      (async () => {
        const arr = [];
        for (let i of goods) {
          arr.push(
            querySkuNotOnShelf({
              goodsCode: i
            })
          );
        }
        try{
          const data = await Promise.all(arr);
          let result: any[] = [];
          data.forEach((item: any) => {
            if(item.rows) {
              result = result.concat(item.rows)
            }
          });
          state.list = result;
        } catch (err) {
          state.list = props.defaultValue;
        }

      })();
      /* ... */
    },
    {immediate : true}
  );

  return {
    state
  }
}
