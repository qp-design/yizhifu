
// @ts-ignore
import React, {useEffect, useRef} from 'react';
// @ts-ignore
import {RDnDProvider} from 'qj-shared-library';
// @ts-ignore
import {materialsList} from './mock'
import {QjIcon} from '@brushes/components'
// @ts-ignore
import {DragJsx, DragImpl} from 'qj-shared-library';
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
  // const drag = useRef();
  // useEffect(() => {
  //   DragImpl(drag.current);
  // }, [])

  return (
    // <div ref={drag} className={'materials-container'}>
      <div className={'materials-container'}>
      <Tabs items={items} className={'tabs'}/>
    </div>
  )
}

export default App;
