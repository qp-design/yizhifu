import React, { Suspense } from 'react';
import {QjIcon} from '@brushes/components';
import classNames from 'classnames';
import {useMonitorReact, useMenu} from '../hooks';
import { _ } from '@brushes/tools';
import {Menu} from '../components';
const {get} = _;

const MonitorComponent = (
  { materials = {} } :
  { materials: object}) => {

  const {
    actived,
    node,
    switchHandler,
    handlerImpl,
  } = useMonitorReact();

  const { menu, path, switchMenu } = useMenu();

  return (
    <Suspense fallback={<p>加载中……</p>}>
      <Menu menu={menu} path={path} switchMenu={switchMenu}/>
      <div className={'default-iphone'}>
        <span className={'title'}>Iphone8首屏</span>
        <span className={'line'}></span>
      </div>
      {
        node.map(({id, props, type, name}, index: number) => {
          const MaterialsComponent = get(materials, type, () => <div></div>);
          return (
            <div key={id} className={'monitor-node'}>
              {
                actived !== id && (
                  <div className={classNames('component-name',
                    {
                      'component-name-left': index % 2,
                      'component-name-right': !(index % 2),
                    })}>
                    { name }
                  </div>
                )
              }
              <div onClick={() => switchHandler(id)}
                   className={classNames('content', {'actived': id === actived})}>
                <MaterialsComponent id={id} {...props}/>
              </div>
              {/*&& path === 'index'*/}
              {
                actived === id && (
                  <div onClick={(e) => handlerImpl(e, id, index)}>
                    <OperateJsx index={index} latest={node.length -1 === index}/>
                  </div>
                )
              }
            </div>
          );
        })
      }
    </Suspense>
  )
}

const OperateJsx = ({ index, latest }: { index: number; latest: boolean }) => {
  return (
    <div className={classNames('icon-operate')}>
      <QjIcon data-code={'delete'} name={'icon-DeleteOutlined'} style={{fontSize: 20}}/>
      {
        !latest && <QjIcon data-code={'xiayi'} name={'icon-xiayi'} style={{fontSize: 20}}/>
      }
      {
        index !== 0 && <QjIcon data-code={'shangyi'} name={'icon-shangyi'} style={{fontSize: 20}}/>
      }
    </div>
  )
}
export default MonitorComponent;
