import {memo} from "react";
import {useComponent, IconMobile, WrapLoading} from '@brushes/qj-simulate-component';
import {getEnv} from '@brushes/api';
// import {config} from "./config";
import {useOrderResult} from './hooks/useOrderResult';

const flag = getEnv();

const PaymentModeJsx = ({code}: { code:string }) => {
  const {View, Text} = useComponent();
  const { paymentImpl, channelList, contract, handleRadio, loading } = useOrderResult(code)

  return (
    <View className={'paymentModeWrap'} style={{
      height: flag ? 'inherit' : '667px'
    }}>
      <View className={'paymentMode'}>
        <View className={'topInfo'}>
          <Text className={'title'}><IconMobile value={'roundcheck'}/>订单提交成功</Text>
          <View className={'info'}>订单号：{contract.current.contractBillcode} | 总金额：{contract.current.dataBmoney}元</View>
        </View>
        <View className={'paymentGroup'}>
          <radio-group onChange={handleRadio}>
            {
              channelList.map(item => {
                return (
                  <View className={'paymentItem'} key={item.fchannelCode}>
                    <IconMobile value={item.icon}/>
                    <View>
                      <View className={'base'}>
                        <Text>{item.fchannelName}</Text>
                        {
                          flag ?
                            <radio value={item.fchannelCode}/> :
                            <input type="radio"/>
                        }
                      </View>
                      {
                        item.value==='account'?
                          <View className={'info'}>
                            <View>账户余额：0元</View>
                            <View>本单抵扣：5.4元</View>
                          </View>:null
                      }
                    </View>
                  </View>
                )
              })
            }
          </radio-group>
        </View>
      </View>
      <WrapLoading loading={loading}>
        <View className={'btnGroup'} onClick={paymentImpl}>
            <View className={'payment'}>立即支付</View>
        </View>
      </WrapLoading>
    </View>
  )
}

export const PaymentMode = memo(PaymentModeJsx);
