import React, {useRef} from 'react';
import {Button, List} from "antd";
import {goodsListLink} from "../config/routerPath";

const GoodsList = ({handleChoose, result}: any) => {

  const dataSource = useRef([
    {
      label: '默认',
      value: 'default',
      sortField: 'pricesetNprice',
      order: 'asc'
    },
    {
      label: '新品',
      value: 'newGoods',
      sortField: '',
      order: 'desc'
    },
    {
      label: '销量降序',
      value: 'salesDesc',
      sortField: 'pricesetNprice',
      order: 'desc'
    },
    {
      label: '销量升序',
      value: 'salesAsc',
      sortField: 'pricesetNprice',
      order: 'asc'
    },
    {
      label: '价格升序',
      value: 'priceAsc',
      sortField: 'pricesetNprice',
      order: 'asc'
    },
    {
      label: '价格降序',
      value: 'priceDesc',
      sortField: 'pricesetNprice',
      order: 'desc'
    }
  ])

  const chooseItem = (item: any) => {
    handleChoose({
      label: `商品列表-${item.label}`,
      value: `${goodsListLink}?sortField=${item.sortField}&order=${item.sortField}`
    })
    console.log(46, result?.label.split('-'), item);
  }


  return (
    <div className={'goodsListLink'}>
      <List
        style={{marginBottom: '20px'}}
        bordered
        dataSource={dataSource.current}
        renderItem={item => (
          <List.Item className={'goodsListLinkItem'}>
            {item.label}
            <Button type={'link'}
                    onClick={chooseItem.bind(null, item)}>{result?.label.split('-')[1] === item.label ? '已选择' : '选择'}</Button>
          </List.Item>
        )}
      />
    </div>
  )
}


export default GoodsList;
