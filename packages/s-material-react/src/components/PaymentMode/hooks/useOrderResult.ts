import {useEffect, useRef, useState} from 'react';
import {saveOrderToPay, syncContractState, paymentCommit} from '../../../utils/payment';
import { _ } from '@brushes/tools';

const { get } = _;

interface payType {
  ptradeSeqno: string;
  contractBlance:string;
  payChannelList: Array<any>
}
export function useOrderResult(code: string) {
  const [loading, setLoading] = useState(false);
  const channel = useRef('');
  const [channelList, setChannelList] = useState([]);
  const result = useRef<payType>({} as any);
  const contract = useRef({
    dataBmoney: '',
    contractBillcode: ''
  });
  useEffect(() => {
    (async() => {
      try {
        const data = await syncContractState({
          contractBillcode: code
        });

        contract.current = data.dataObj;

        const res = await saveOrderToPay({
          contractBillcode: contract.current.contractBillcode ?? ''
        })

        setChannelList(res.payChannelList);
        result.current = res;
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const handleRadio = (params: any) => {
    channel.current = params.detail.value;
  }

  const paymentImpl = () => {
    switch (channel.current) {
      case 'wechatmini':
        wechatmini();
        break;
    }
  }

  const wechatmini = async () => {
    setLoading(true);
    const { ptradeSeqno, contractBlance, payChannelList } = result.current;

    // 模拟微信支付场景
    const pyJsons =  [
      {
        faccountIdType: 'ACCOUNT',
        fchannelCode: payChannelList[1].fchannelCode,
        orderAmount: contract.current.dataBmoney,
        faccountId: payChannelList[1].faccountOuterNo || ''
      }
    ];
    try {

      const res = await paymentCommit({
        ptradeSeqno,
        payCommitStr: JSON.stringify(pyJsons),
        contractBlance,
      })
      let data = res.dataObj.requestData;
      wx.requestPayment({
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success: function(res) {

          console.log(64, res);
        },
        fail: function(res) {
          console.log(res, '失败参数');
          setLoading(false)
        },
        complete: function(res) {
          setLoading(false)
        }
      });
    } catch (err) {
      setLoading(false)
    }

  }

  return {
    paymentImpl,
    channelList,
    handleRadio,
    contract,
    loading
  }
}
