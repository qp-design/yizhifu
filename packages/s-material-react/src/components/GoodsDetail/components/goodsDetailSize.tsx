import {useComponent} from '@brushes/qj-simulate-component';
import {THREE_DOTS} from '../../../static';
import GoodsDetailPopup from './goodsDetailPopup';
import {useDispatchImpl, useStore} from '../store';

const GoodsDetailSize = ({goods}: any) => {
  const {View, Text} = useComponent();
  const { count, spec } = useStore();
  const dispatch = useDispatchImpl()
  return (
    <>
      <View className={'goodsDetail-size'} onClick={() => dispatch({
        type: 'popupImpl',
        payload: {
          popupVisible: true,
          isNeedButton: false
        }
      })}>
        <Text className={'label'}>规格</Text>
        <View className={'info'}>　　
          <Text className={'label'}>已选择 数量: {count}  规格: {spec}</Text>
          <img src={THREE_DOTS} alt="" className={'icon'}/>
        </View>
      </View>

      <GoodsDetailPopup
        goods={goods}
      />
    </>
  );
};

export default GoodsDetailSize;
