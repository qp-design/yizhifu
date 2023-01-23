import {FC, memo, useEffect, useState} from 'react';
import { navigatorImpl, useComponent, navigatorBackImpl } from '@brushes/qj-simulate-component';
import { SEARCH } from '../../static';
import { useImmutableCallback, _ } from '@brushes/tools';
import {getEnv, getTaro} from '@brushes/api';
import { routerMap } from '../../routerMap';
import {QjMobileIcon} from '../../common/icon';

const flag = getEnv();
const { isEmpty } = _;

interface SearchPageType {
    placeholder: number;
    placeholderText: string;
    history: 1;
}

const SearchPageJsx: FC<SearchPageType> = ({ placeholder, placeholderText, history }) => {
    const { View, Text } = useComponent();
    const [historyItem, setHistory] = useState([]);

    useEffect(() => {
        (async () => {
            const isTaro = getEnv();
            if(!isTaro) return;
            const Taro = await getTaro();
            const history = Taro.getStorageSync('history') || [];
            setHistory(history);
        })()
    }, []);

    const searchGoodsImpl = useImmutableCallback(async (e: any) => {
        console.log(19, e.detail.value);
        const isTaro = getEnv();
        if(!isTaro) return;
        const Taro = await getTaro();
        setHistory(prevState => {
            if(isEmpty(e.detail.value)) return prevState;
            const data = prevState.concat(e.detail.value);
            Taro.getStorageSync('history', data);
            return data
        });
        navigatorHandler(e.detail.value);
    });

    const navigatorHandler = useImmutableCallback((value: string) => {
        navigatorImpl(`${routerMap.goodList}?searchParam=${value}`);
    })

    const removeHistory = async () => {
        const Taro = await getTaro();
        Taro.removeStorageSync('history');
        setHistory([]);
    }
    return (
        <View className={'searchPage'} style={{ height: flag ? '100vh' : '667px' }}>
            <View className={'search-title'}>
                <img src={SEARCH} alt="" />
                <input
                    confirm-type="search"
                    type="text"
                    className={'content'}
                    onConfirm={searchGoodsImpl}
                    {...(placeholder ? { placeholder: placeholderText } : {})}
                />
                <Text className={'btn'} onClick={() => navigatorBackImpl()}>取消</Text>
            </View>

            {history ? (
                <View className={'historyWrap'}>
                    <View className={'title'}>
                        <View className={'label'}>
                            <View className={'icon'}></View>
                            历史搜索记录
                        </View>
                        <QjMobileIcon
                          onClick={removeHistory}
                          value={'shanchu'}
                          style={{ fontSize: 18, color: '#222', lineHeight: '61px', cursor: 'pointer' }} />
                    </View>
                    <View className={'content'}>
                        {historyItem.map((item, index) => {
                            return (
                                <View
                                  onClick={() => navigatorHandler(item)}
                                  key={index}
                                  className={'historyItem'}
                                >
                                    {item}
                                </View>
                            );
                        })}
                    </View>
                </View>
            ) : null}
        </View>
    );
};

export const SearchPage = memo(SearchPageJsx);
