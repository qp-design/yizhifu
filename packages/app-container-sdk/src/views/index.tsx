// @ts-ignore
import {DropJsx} from 'qj-shared-library';
import { MonitorComponent } from '../monitor';
// @ts-ignore
import OperateJsx from './operateJsx';
import {useConfigEnv, useDynamicModule} from '../hooks';

export const Root = ({Operate, Menu, materials} : { Operate: Function; Menu: Function; materials: any}) => {
  useConfigEnv()
  const { pageId, defaultPageConfig} = useDynamicModule('index')

  return (
    <div className={'design-container'}>
      <Menu />
      <DropJsx pageId={pageId} defaultPageConfig={defaultPageConfig}>
        <div id={"simulate-qj-monitor-20221014"}>
          <MonitorComponent materials={materials}/>
        </div>
      </DropJsx>
      <OperateJsx Operate={Operate}/>
    </div>
  )
}
