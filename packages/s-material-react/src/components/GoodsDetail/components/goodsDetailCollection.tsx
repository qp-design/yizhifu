import {SEARCH} from '../../../static';
import {useComponent} from '@brushes/qj-simulate-component';
import {checkCollectExit, saveCollect, deleteCollectByCode} from '@brushes/api';
import {_} from '@brushes/tools';
import {useEffect} from 'react';
import {useStore} from '../store';

const {isEmpty} = _;

interface checkCollectionType {
  collectType: number;
  collectOpcode: string;
}

interface collectParamsType {
  collectType: number;
  collectOpcode: string;
  collectOppic: string;
  collectOpcont: string;
  collectOpnum: string;
  goodsOrigin: number;
}

const GoodsDetailCollection = ({checkCollectionObj, setCheckCollectionObj, goods}: any) => {
  const {Text, View} = useComponent();
  useEffect(() => {
    checkCollection();
  }, []);

  const checkCollection = async () => {
    const checkCollectionParams: checkCollectionType = {
      collectType: 0,
      collectOpcode: goods.rsSkuDomainList[0].skuCode || ''
    };
    try{
      const result = await checkCollectExit(checkCollectionParams);
      setCheckCollectionObj(result);
    } catch (err) {
      console.log(err)
    }

  };

  const handleSaveCollect = async () => {
    const saveCollectParmas: collectParamsType = {
      collectType: 0,
      collectOpcode: goods.rsSkuDomainList[0].skuCode || '',
      collectOppic: goods.dataPic,
      collectOpcont: goods.goodsName,
      collectOpnum: goods.pricesetNprice,
      goodsOrigin: 0
    };
    await saveCollect(saveCollectParmas);
  };

  const handleDeleteCollectByCode = async () => {
    const deleteCollectByCodeParams: checkCollectionType = {
      collectType: 0,
      collectOpcode: goods.rsSkuDomainList[0].skuCode || ''
    };
    await deleteCollectByCode(deleteCollectByCodeParams);
  };

  const handleCollect = () => {
    console.log(123);
    if (isEmpty(checkCollectionObj.dataObj)) {
      handleSaveCollect();
    } else {
      handleDeleteCollectByCode();
    }
    checkCollection();
  };

  return (
    <View onClick={handleCollect}>
      <img src={SEARCH} alt="" className={'icon'}/>
      <Text className={'txt'}>{isEmpty(checkCollectionObj.dataObj) ? '收藏' : '已收藏'}</Text>
    </View>
  );
};

export default GoodsDetailCollection;
