import React from 'react';
import Button from 'antd/es/button';
import Space from 'antd/es/space';
import Modal from 'antd/es/modal';
// @ts-ignore
import {FederationModule, remoteAssetsType} from 'qj-shared-library';
import {useSaveConfig} from '../hooks/useSaveConfig';
import {PageItems} from '../components';


const OperateJsx = ({Operate}: {Operate: Function}) => {
  const {saveImpl, defaultValue, isModalOpen, handleOk, handleCancel, data, loading} = useSaveConfig()
  return (
    <div className={'operateConfig'}>
      <div className={'config-top'}>
        <Space>
          <Button type={'primary'} onClick={saveImpl}>
            保存
          </Button>
        </Space>
      </div>
      <Modal title="页面配置" confirmLoading={loading} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <PageItems data={data} />
      </Modal>
      <Operate defaultValue={defaultValue}/>
    </div>
  )
}


export default OperateJsx;
