// @ts-ignore
import React from 'react';
import {Collapse} from 'antd';

const {Panel} = Collapse;
import './index.scss';
import {config} from "../../mock/config";


const ModuleC = () => {
  return (
    <div className={'moduleC'}>
      <Collapse ghost defaultActiveKey={config.map(item => item.id)}>
        {
          config.map(type=> {
            return (
              <Panel header={type.label} key={type.id}>
                {
                  type.children.map(item => <p>{item.name}</p>)
                }
              </Panel>
            )
          })
        }
      </Collapse>
    </div>
  )
}

export default ModuleC;
