import { switchTabImpl, useComponent, IconMobile } from '@brushes/qj-simulate-component';
import {useDispatchImpl} from '../store';
import {routerMap} from '../../../routerMap';

const GoodsDetailHandleBar = () => {
    const { Text, View } = useComponent();
    const dispatch = useDispatchImpl()
    return (
        <View className={'goodsDetailHandleBar'}>
            <View className={'linkGroup'}>
                <IconMobile value={'kefu'} style={{ fontSize: 22, display: 'block' }} />
                <Text className={'txt'}>客服</Text>
            </View>

            <View className={'linkGroup'} onClick={() => switchTabImpl(routerMap.shopping)}>
                <IconMobile value={'gouwuche'} style={{ fontSize: 22, display: 'block' }} />
                <Text className={'txt'}>购物车</Text>
            </View>

            <View className={'btnGroup'}>
                <View className={'btn addCart'} onClick={() => {
                  dispatch({
                    type: 'popupImpl',
                    payload: {
                      orderType: 0,
                      popupVisible: true,
                      isNeedButton: true
                    }
                  })
                }}>
                    加入购物车
                </View>
              {/*navigatorImpl('/subpackage/orderconfirm/index.ts')*/}
                <View onClick={() => {
                  dispatch({
                    type: 'popupImpl',
                    payload: {
                      orderType: 1,
                      popupVisible: true,
                      isNeedButton: true
                    }
                  })
                }} className={'btn buy'}>
                    立即购买
                </View>
            </View>
        </View>
    );
};

export default GoodsDetailHandleBar;
