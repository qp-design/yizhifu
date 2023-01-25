import React from 'react';
import './index.scss';
import Tabs from 'antd/es/tabs';
import { QjIcon } from '@brushes/share-resource'
import TemplateC from "./components/templateC";
import ModuleC from "./components/moduleC";

const Index = () => {
  const items = [
    {
      label: (
        <>
          <QjIcon name={'icon-combination'}/>组件
        </>
      )
      , key: 'item-1', children: <ModuleC/>
    }, // 务必填写 key
    {
      label: (
        <>
          <QjIcon name={'icon-a-1'}/>模版
        </>
      ), key: 'item-2', children: <TemplateC/>
    },
  ];

  return (
      <div className={'materials-container'}>
        <Tabs items={items} className={'tabs'}/>
      </div>
  )
}

export default Index;

