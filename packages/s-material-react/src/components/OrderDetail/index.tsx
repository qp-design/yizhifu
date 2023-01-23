import React, { memo } from 'react';
import { useComponent, antdMobile, navigatorImpl } from '@brushes/qj-simulate-component';
import { ORDERTOPAY } from '../../static';
import { CardJsx } from '../../common/card';
import { result } from '../OrderList/components/mock';
import { routerMap } from '../../routerMap';
const { Button } = antdMobile;

const OrderDetailJsx: React.FC = () => {
    const { View, Text } = useComponent();
    return (
        <View className={'orderDetail'}>
            <View className={'orderDetailTopTitle'}>
                <View className={'orderDetailTopTitleContent'}>
                    <Text className={'title'}>订单详情</Text>
                    <View className={'subTitleWrap'}>
                        <img src={ORDERTOPAY} alt="" className={'subTitleIcon'} />
                        <Text className={'subTitle'}>已完成</Text>
                    </View>
                </View>
            </View>

            <View className={'orderDetailContent'}>
                <View style={{ position: 'relative', top: -26 }}>
                    <View className={'addressInfo'}>
                        <View className={'lPart'}>
                            <img src={ORDERTOPAY} alt="" className={'icon'} />
                        </View>
                        <View className={'mPart'}>
                            <View className={'personInfo'}>
                                <Text className={'personName'}>李明真</Text>
                                <Text className={'personPhone'}>13679126756</Text>
                            </View>
                            <View className={'address'}>上海市闵行区古美路华一新城18-201</View>
                        </View>
                        <View className={'rPart'}>
                            <img src={ORDERTOPAY} alt="" className={'icon'} />
                        </View>
                    </View>

                    <View className={'orderDetailGoodsWrap'}>
                        {result.rows[0].goodsList.map((item) => (
                            <CardJsx key={item.contractGoodsId} {...item} />
                        ))}

                        <View className={'btnGroup'}>
                            <Button shape="rounded" className={'btn white'}>
                                查看物流
                            </Button>
                            <Button
                                shape="rounded"
                                onClick={() => {
                                    navigatorImpl(routerMap.rate);
                                }}
                                className={'btn black'}
                            >
                                确认收货
                            </Button>
                        </View>

                        <View className={'priceInfo'}>
                            <View className={'priceInfoFloor top'}>
                                <View className={'totalNum'}>共2件商品</View>
                                <View className={'totalPrice'}>合计 ￥1960.00</View>
                            </View>
                            <View className={'priceInfoFloor'}>
                                <View className={'totalNum'}>商品总额</View>
                                <View className={'totalPrice'}>合计 ￥1960.00</View>
                            </View>
                            <View className={'priceInfoFloor'}>
                                <View className={'totalNum'}>优惠</View>
                                <View className={'totalPrice'}>合计 ￥1960.00</View>
                            </View>
                        </View>
                    </View>

                    <View className={'express'}>
                        <View className={'label'}>配送方式</View>
                        <View className={'name'}>快递</View>
                    </View>

                    <View className={'orderInfo'}>
                        <View className={'orderInfoItem'}>
                            <View className={'label'}>订单信息</View>
                        </View>
                        <View className={'orderInfoItem'}>
                            <View className={'label'}>买家留言</View>
                            <View className={'name'}>快点发货哟</View>
                        </View>
                        <View className={'orderInfoItem'}>
                            <View className={'label'}>订单编号</View>
                            <View className={'name'}>243728743824782</View>
                        </View>
                        <View className={'orderInfoItem'}>
                            <View className={'label'}>系统编号</View>
                            <View className={'name'}>243728743824782</View>
                        </View>
                        <View className={'orderInfoItem'}>
                            <View className={'label'}>下单时间</View>
                            <View className={'name'}>2022-10-01 10:00:00</View>
                        </View>
                    </View>

                    <View className={'btnGroupFooter'}>
                        <Button shape="rounded">申请退款</Button>
                        <Button shape="rounded">申请售后</Button>
                    </View>
                </View>
            </View>
        </View>
    );
};

export const OrderDetail = memo(OrderDetailJsx);
