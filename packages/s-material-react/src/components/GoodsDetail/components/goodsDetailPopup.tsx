import {Popup, NumStep} from '@brushes/qj-simulate-component';
import {useAddShopping} from '../hooks';
import {useComponent} from '@brushes/qj-simulate-component';

const GoodsDetailPopup = ({goods}: any) => {
  const {
    count,
    spec,
    popupVisible,
    isNeedButton,
    handleChooseSize,
    handleStep,
    popupHandler,
    addShoppingImpl
  } = useAddShopping()
  const {View, Text, Image} = useComponent();

  return (
    <Popup popupVisible={popupVisible} popupHandler={popupHandler}>
      <View className={'goodsDetail-size-popup'}>
        <View className={'content'}>
          <View className={'goodsInfo'}>
            <View className={'lPart'}>
              <Image src={goods.dataPic} alt="" className={'goodsImg'}/>
            </View>
            <View className={'rPart'}>
              <View className={'name'}>{goods.goodsShowname || ''}</View>
              <View className={'price'}>￥ {goods.pricesetNprice.toFixed(2) || ''}</View>
              <View className={'chosen'}>已选择: {spec}</View>
            </View>
          </View>

          <View className={'sizeArr'}>
            <Text className={'title'}>选择颜色</Text>
            <View className={'sizeArrItemWrap'}>
              {goods.rsSpecValueDomainList.map((item: any, index: number) => {
                return (
                  <View
                    className={`sizeItem ${spec === item.specValueValue ? 'active' : ''}`}
                    key={index}
                    onClick={handleChooseSize.bind(null, item.specValueValue)}
                  >
                    {item.specValueValue}
                  </View>
                );
              })}
            </View>
          </View>

          <View className={'countWrap'}>
            <View className={'label'}>购买数量</View>
            <NumStep count={count} handleStep={handleStep}/>
          </View>
        </View>
        {
          isNeedButton && <View className={'btnWrap'} onClick={addShoppingImpl}>
            <Text className={'btn'}>确认</Text>
          </View>
        }
      </View>
    </Popup>
  );
};

export default GoodsDetailPopup;
