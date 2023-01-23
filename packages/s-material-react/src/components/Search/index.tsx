import React, { memo } from 'react';
import {navigatorImpl, useComponent} from '@brushes/qj-simulate-component';
import { SEARCH } from '../../static';
import {routerMap} from '../../routerMap';

interface SearchType {
    value: string;
    iconShow: boolean;
    fontColor: string;
    backgroundColor: string;
    borderRadius: number;
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
}

const SearchJsx: React.FC<SearchType> = ({
    value,
    iconShow,
    fontColor,
    backgroundColor,
    borderRadius,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
}) => {
    const { View, Image } = useComponent();
    return (
        <View
            onClick={() => navigatorImpl(routerMap.search)}
            style={{
                paddingTop,
                paddingBottom,
                paddingLeft,
                paddingRight
            }}
        >
            <View
                className={'components-search'}
                style={{
                    backgroundColor,
                    borderRadius: borderRadius + 'px',
                    height: '32px',
                    lineHeight: '32px',
                    width: '100%',
                    display: 'inline-block',
                    textAlign: 'center'
                }}
            >
                <Image
                    src={SEARCH}
                    alt=""
                    mode={'fill'}
                    style={{
                        height: '16px',
                        width: '16px',
                        display: iconShow ? 'inline-block' : 'none',
                        verticalAlign: 'top',
                        marginTop: '8px',
                        marginRight: '10px'
                    }}
                />
                <View
                    className={'txt'}
                    style={{
                        color: fontColor,
                        display: 'inline-block',
                        fontSize: '14px'
                    }}
                >
                    {value}
                </View>
            </View>
        </View>
    );
};

export const Search = memo(SearchJsx);
