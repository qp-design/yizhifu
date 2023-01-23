import { useComponent, antdMobile } from '@brushes/qj-simulate-component';
import { CardJsx } from '../../../common/card';
const { Button } = antdMobile;

interface OrderType {
    contractBillcode: string;
    goodsList: Array<OrderGoodsItem>;
    dataBmoney: number;
    dataBnum: number;
}

export interface OrderGoodsItem {
    dataPic: string;
    goodsName: number;
    dataBmoney: number;
    goodsCamount: number;
    contractGoodsId: number;
}

export function Item({ contractBillcode, dataBmoney, dataBnum, goodsList }: OrderType) {
    const { View } = useComponent();
    return (
        <View className={'orderListItem'}>
            <View className={'topInfo'}>
                <View className={'orderNo'}>
                    订单号: {contractBillcode}
                    <Button className={'copy'} size="mini" fill={'outline'}>
                        复制
                    </Button>
                </View>
                <View className={'status'}>待支付</View>
            </View>
            <View className={'goodsItemWrap'}>
                {/*{goodsList.map((item) => (*/}
                {/*    <CardJsx key={item.contractGoodsId} {...item} />*/}
                {/*))}*/}
                <View className={'allInfo'}>
                    <View className={'totalNum'}>共{dataBnum}件商品</View>
                    <View className={'totalPrice'}>合计 ￥{dataBmoney}</View>
                </View>
            </View>
            <View className={'btnGroup'}>
                <Button shape="rounded" className={'btn white'}>
                    查看物流
                </Button>
                <Button shape="rounded" className={'btn black'}>
                    确认收货
                </Button>
            </View>
        </View>
    );
}
