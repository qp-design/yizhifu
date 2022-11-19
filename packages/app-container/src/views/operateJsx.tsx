import React from 'react';
import Button from 'antd/es/button';
import Space from 'antd/es/space';

// @ts-ignore
import { FederationModule} from 'qj-shared-library';
import {useSaveConfig} from '../hooks/useSaveConfig';


const OperateJsx = ({port}: {port: Object}) => {
  const {saveImpl, defaultValue} = useSaveConfig()

  return (
    <div className={'operateConfig'}>
      <div className={'config-top'}>
        <Space>
          <Button type={'primary'} onClick={saveImpl}>
            保存
          </Button>
        </Space>
      </div>
      <MaterialOperate
        port={port}
        defaultValue={defaultValue}
      />
    </div>
  )
}

const MaterialOperate = ({defaultValue, port} : { defaultValue: Object; port: Object}) => {
  return (
    <FederationModule
      defaultValue={defaultValue}
      port={port}
    />
  )
}

export default OperateJsx;
