
// @ts-ignore
import React, {useEffect, useRef} from 'react';
// @ts-ignore
import {materialsList} from './mock'
import './index.scss';
import {Tabs} from 'antd';
import {AppstoreOutlined, LayoutOutlined} from '@ant-design/icons';
import TemplateC from "./components/templateC";
import ModuleC from "./components/moduleC";

const App = () => {
  const items = [
    {
      label: (
        <>
          <AppstoreOutlined/>组件
        </>
      )
      , key: 'item-1', children: <ModuleC/>
    }, // 务必填写 key
    {
      label: (
        <>
          <LayoutOutlined/>模版
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

export default App;

