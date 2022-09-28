
// @ts-ignore
import React, {useEffect, useRef} from 'react';
// @ts-ignore
import {RDnDProvider} from 'qj-shared-library';
// @ts-ignore
import {materialsList} from './mock'
import {QjIcon} from '@brushes/components'
// @ts-ignore
import {DragJsx} from 'qj-shared-library';
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
// =======
// const Materials = () => {
//   return (
//     <DragJsx>
//       {
//         materialsList.map(item => (
//           <div data-item={JSON.stringify(item)}
//                key={item.type} className={'item'}>
//             {/*<DragJsx {...item}>*/}
//               <QjIcon style={{ fontSize: '40px', fontWeight: 500 }} name={item.icon}></QjIcon>
//             {/*</DragJsx>*/}
//             <div className={'title'}>{ item.name }</div>
//           </div>
//         ))
//       }
//     </DragJsx>
//   )
// }
//
// const DefaultMaterials = () => {
//   return (
//     <div className={'materials-container'}>
//       <h1>基础组件</h1>
//       <Materials/>
//     </div>
//   )
// }
//
// export default DefaultMaterials;
// >>>>>>> 95fa23998824e7e6e15eb8262051451cff775826
