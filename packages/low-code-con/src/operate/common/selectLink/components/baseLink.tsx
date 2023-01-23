import React, {useRef} from 'react';
import {resultDataType} from "../index";
import {Button, List} from "antd";

const BaseLink = ({handleChoose, result}: any) => {
  const dataSource = useRef<Array<resultDataType>>([
    {
      label: '首页',
      value: '/pages/index.ts/index.ts'
    },
    {
      label: '购物车',
      value: '/pages/shopping/index.ts'
    },
    {
      label: '我的',
      value: '/pages/my/index.ts'
    },
  ])

  const chooseItem = (item: any) => {
    handleChoose(item)
  }

  return (
    <div className={'baseLink'}>
      <List
        style={{marginBottom: '20px'}}
        bordered
        dataSource={dataSource.current}
        renderItem={item => (
          <List.Item className={'baseLinkItem'}>
            {item.label}
            <Button type={'link'}
                    onClick={chooseItem.bind(null, item)}>{result?.value === item.value ? '已选择' : '选择'}</Button>
          </List.Item>
        )}
      />
    </div>
  )
}

export default BaseLink;
