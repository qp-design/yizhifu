import {useEffect, useState} from 'react';
import {itemType} from '../../Slider';
import {getResourceGoodsInfoBySkuCode, queryPromotionListByGoodsCode} from '@brushes/api';
import { _ } from '@brushes/tools';
import {useDispatchImpl} from '../store';

const {isEmpty, get} = _;

interface promotionListParamsType {
  skuNo: string;
  skuCode: string;
  classtreeCode: string;
  brandCode: string;
  pntreeCode: string;
  memberCode: string;
}

export const useGoodsDetailImpl = (skuCode: string) => {
  const [goods, setGoods] = useState({});
  const [promotionArr, setPromotionArr] = useState([]);
  const [checkCollectionObj, setCheckCollectionObj] = useState({});
  const [sliderArr, setSliderArr] = useState<Array<itemType>>([]);
  const [tabActive, setTabActive] = useState(1);
  const [popupVisible, setPopupVisible] = useState(false);
  const dispatch = useDispatchImpl();

  useEffect(() => {
    getGoodsDetailData();
  }, []);

  const getGoodsDetailData = async () => {
    try {
      const goodsDetailResult = await getResourceGoodsInfoBySkuCode({
        skuCode,
        // isLocalMock: true
      });

      const promotionListParams: promotionListParamsType = {
        skuNo: goodsDetailResult.skuNo || '',
        skuCode: goodsDetailResult.rsSkuDomainList[0].skuCode || '',
        classtreeCode: goodsDetailResult.classtreeCode || '',
        brandCode: goodsDetailResult.brandCode || '',
        pntreeCode: goodsDetailResult.pntreeCode || '',
        memberCode: goodsDetailResult.memberCode || ''
      };

      const arr = get(goodsDetailResult, 'rsGoodsFileDomainList', []);

      if (isEmpty(arr)) return;
      const sliderData = arr.map((item: any) => {
        return {
          imgUrl: item.goodsFileUrl,
          link: ''
        };
      });

      dispatch({
        type: 'initGoods',
        payload: {
          spec: get(goodsDetailResult, 'rsSpecValueDomainList[0].specValueValue', ''),
          goodsCode: goodsDetailResult.goodsCode,
          goodsNum: goodsDetailResult.goodsNum
        }
      });

      setSliderArr(sliderData);
      setGoods(goodsDetailResult);
      getPromotionData(promotionListParams);
    } catch (err) {
      console.log(59, err);
    }
  };

  const getPromotionData = async (params: promotionListParamsType) => {
    try {
      const result = await queryPromotionListByGoodsCode(params);
      setPromotionArr(result);
    } catch (err) {
      console.log(err)
    }
  };

  return {
    promotionArr,
    checkCollectionObj, setCheckCollectionObj,
    sliderArr,
    tabActive, setTabActive,
    popupVisible, setPopupVisible,
    goods
  }
}
