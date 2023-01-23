import React, {memo, useEffect, useState} from 'react';
import {useComponent, antdMobile, navigatorImpl} from '@brushes/qj-simulate-component';
import {ClassifyFloor} from './components/classifyFloor';
// import {SEARCH} from "../../static";
import {getEnv} from '@brushes/api';
import {queryGoodsClassTree} from '@brushes/api';
import {QjMobileIcon} from '../../common/icon';
import {_} from '@brushes/tools';
import {routerMap} from '../../routerMap';

const {get} = _;
const {SideBar} = antdMobile;

const GoodsClassifyJsx: React.FC = () => {
  const {View, Text} = useComponent();
  const [activeKey, setActiveKey] = useState('');
  const [navList, setNavList] = useState([]);
  const flag = getEnv();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let commits = await queryGoodsClassTree();
      setNavList(commits || []);
      const code = get(commits, '[0].goodsClassCode');
      setActiveKey(code);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className={'goodsClassifyWrap'} style={{height: flag ? '100%' : '667px'}}>
      <View className={'goods-classify'}>
        <View className={'goods-classify-search'} onClick={() => navigatorImpl(routerMap.search)}>
          <QjMobileIcon value="fenxiang"/>
          <Text>搜索商品</Text>
        </View>
      </View>
      <View className={'goodsClassifyContainer'}>
        <View className={'side'}>
          <SideBar
            activeKey={activeKey}
            onChange={setActiveKey}
            style={{
              '--width': '88px'
            }}
          >
            {navList.map((item: any) => (
              <SideBar.Item key={item.goodsClassCode} title={item.goodsClassName}/>
            ))}
          </SideBar>
        </View>
        <View className={'main'}>
          <ClassifyFloor navList={navList} activeKey={activeKey}/>
        </View>
      </View>
    </View>
  );
};

export const GoodsClassify = memo(GoodsClassifyJsx);
