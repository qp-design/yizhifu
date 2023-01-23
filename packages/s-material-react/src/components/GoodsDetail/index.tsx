import {memo} from 'react';
import {_} from '@brushes/tools';
import GoodsDetailPromotion from './components/goodsDetailPromotion';
import GoodsDetailCoupon from './components/goodsDetailCoupon';
import GoodsDetailCollection from './components/goodsDetailCollection';
import GoodsDetailHandleBar from './components/goodsDetailHandleBar';
import {Slider} from '../Slider';
import GoodsDetailInfo from './components/goodsDetailInfo';
import GoodsDetailEvaluate from './components/goodsDetailEvaluate';
import GoodsDetailSize from './components/goodsDetailSize';

import {useGoodsDetailImpl} from './hooks';
import {StoreProvider} from './store'
import {getEnv} from '@brushes/api';
import {useComponent} from "@brushes/qj-simulate-component";

const {isEmpty} = _;

const flag = getEnv();

interface GoodsDetailType {
  skuCode: string
}

const GoodsDetailJsx: React.FC<GoodsDetailType> = ({skuCode}) => {
  return (
    <StoreProvider>
      <GoodsDetailJsxInner skuCode={skuCode}/>
    </StoreProvider>
  )
}

const GoodsDetailJsxInner: React.FC<GoodsDetailType> = ({skuCode}) => {
  const {View, Text, Skeleton} = useComponent();
  const {
    goods,
    promotionArr,
    checkCollectionObj,
    setCheckCollectionObj,
    sliderArr,
    tabActive,
    setTabActive,
  } = useGoodsDetailImpl(skuCode);

  return (
      <View
        className={'GoodsDetailWrap'}
        style={{
          minHeight: flag ? '' : '667px',
          height: flag ? '' : 'auto',
          overflow: flag ? '' : 'auto',
        }}
      >
        {isEmpty(goods) ? (
          <View className={'skeleton'}>
            <Skeleton
              animated
              style={{
                '--width': '100%',
                '--height': '300px'
              }}
            />
            <Skeleton.Title animated/>
            <Skeleton.Paragraph lineCount={10} animated/>
          </View>
        ) : (
          <>
            <View className={'topSlider'}>
              <Slider selectImg={sliderArr} type={1} imgHeight={{height: 375, width: 375}}/>
            </View>
            <View className={'goodsDetail-topInfo'}>
              <View>
                <Text className={'name'}>{goods?.goodsName}</Text>
                <Text className={'price'}>￥{goods?.pricesetNprice?.toFixed(2)}</Text>
              </View>
              <View className={'rPart'}>
                <GoodsDetailCollection
                  goods={goods}
                  checkCollectionObj={checkCollectionObj}
                  setCheckCollectionObj={setCheckCollectionObj}
                />
              </View>
            </View>


            {/** 选择规格，数量 **/}
            <GoodsDetailSize
              goods={goods}
            />

            {/** 促销 **/}
            <GoodsDetailPromotion
              promotionList={promotionArr}
            />

            {/** 优惠券 **/}
            <GoodsDetailCoupon/>
            <View className={'goodsDetailTab'}>
              <View className={'tabs'}>
                <Text
                  className={`tabsItem ${tabActive === 1 ? 'active' : ''}`}
                  onClick={() => setTabActive(1)}
                >
                  商品详情
                  <Text className={'line'}></Text>
                </Text>
                <Text
                  className={`tabsItem ${tabActive === 2 ? 'active' : ''}`}
                  onClick={() => setTabActive(2)}
                >
                  评价
                  <Text className={'line'}></Text>
                </Text>
              </View>
              <View className={'group'}>
                {tabActive === 1 ? <GoodsDetailInfo tabActive={tabActive} goods={goods}/> : <GoodsDetailEvaluate/>}
              </View>
            </View>
            <GoodsDetailHandleBar/>
          </>
        )}
      </View>
  );
};

export const GoodsDetail = memo(GoodsDetailJsx)
