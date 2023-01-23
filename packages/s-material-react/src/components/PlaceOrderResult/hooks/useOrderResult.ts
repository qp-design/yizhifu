import {useEffect, useRef} from 'react';
import {saveOrderToPay, syncContractState, paymentCommit} from '../../../utils/payment';
import { _ } from '@brushes/tools';

const { get } = _;

interface payType {
  ptradeSeqno: string;
  contractBlance:string;
  payChannelList: Array<any>
}
export function useOrderResult(code: string) {
  const result = useRef<payType>({} as any);
  const amount = useRef(0);
  useEffect(() => {
    (async() => {
      try {
        const data = await syncContractState({
          contractBillcode: code
        });

        amount.current = get(data, 'dataObj.dataBmoney', 0);
        const contractBillcode = get(data, 'dataObj.contractBillcode', '');
        result.current = await saveOrderToPay({
          contractBillcode
        })

        console.log(result);
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const paymentImpl = async () => {
    const { ptradeSeqno, contractBlance, payChannelList } = result.current;

    // 模拟微信支付场景
    const pyJsons =  [
      {
        faccountIdType: 'ACCOUNT',
        fchannelCode: payChannelList[1].fchannelCode,
        orderAmount: amount.current,
        faccountId: payChannelList[1].faccountOuterNo || ''
      }
    ];
    try {

      const res = await paymentCommit({
        ptradeSeqno,
        payCommitStr: JSON.stringify(pyJsons),
        contractBlance,
      })

      console.log(51, res)
      let data = res.dataObj.requestData;
      console.log(data)
      wx.requestPayment({
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success: function(res) {

          console.log(64, res);
          // http.post(syncContractPayState, {
          //   contractBillcode: $storage.get('contractBillcode')
          // })
          //   .then(res => {
          //     if (res.success) {
          //       $router.replace('pay/paySuccess', {
          //         contractBillcode: $storage.get('contractBillcode')
          //       });
          //     } else {
          //       $router.replace('pay/payFail', {
          //         contractBillcode: $storage.get('contractBillcode')
          //       });
          //     }
          //   })
          //   .catch(err => {
          //     $message.alert('支付失败！');
          //   });
        },
        fail: function(res) {
          console.log(res, '失败参数');
          //$router.replace('pay/payFail')
        },
        complete: function(res) {}
      });
    } catch (err) {

    }

  }

  return {
    paymentImpl
  }
}
