import {useComponent, Popup, SmoothRadio} from '@brushes/qj-simulate-component';
import {THREE_DOTS} from '../../../static';
import {useState} from 'react';
import {Coupon} from '../../../common/coupon';
import {useDispatchImpl, useStore} from '../store';

const fake = [
  {
    title: '五一大促疯抢 满100立减10',
    date: '2022-10-01',
    price: 10,
    id: 1,
  },
  {
    title: '五一大促疯抢 满100立减10',
    date: '2022-10-01',
    price: 20,
    id: 2,
  },
  {
    title: '五一大促疯抢 满100立减10',
    date: '2022-10-01',
    price: 30,
    id: 3,
  },
];

const GoodsDetailCoupon = () => {
  const {View, Text} = useComponent();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatchImpl();
  const { couponValue } = useStore();

  console.log(34, couponValue);
  const onChange = (value:any) => {
    dispatch({
      type: 'select',
      payload: {
        couponValue: value.detail.value
      }
    })

  }

  return (
    <>
      <View className={'goodsDetail-coupon'} onClick={() => setVisible(true)}>
        <Text className={'label'}>优惠券</Text>
        <View className={'info'}>
          <Text className={'label'}>{ couponValue ? `已选择: ${couponValue}`:'请选择优惠券' }</Text>
          <img src={THREE_DOTS} alt="" className={'icon'}/>
        </View>
      </View>
      <Popup popupVisible={visible} popupHandler={setVisible}>
        <View className={'goodsDetail-coupon-popup'}>
          <View className={'stampWrap'}>
            <SmoothRadio onChange={onChange} defaultValue={0}>
              {fake.map((item, index) => {
                return <Coupon index={index} item={item} key={index}/>;
              })}
            </SmoothRadio>
          </View>
        </View>
      </Popup>
    </>
  );
};

export default GoodsDetailCoupon;
