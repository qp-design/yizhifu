import { Spin } from 'antd';
import {
  usePicture,
} from '@brushes/store';
import {DynamicForm, NamePath} from '@brushes/components';
import {defaultFormConfig} from '../config';
import React from 'react';

import Items from './items';
import UploadImg from './upload';

export const PictureJsx = ({defaultValue, name, onValueChange}: { defaultValue: any; name:NamePath;  onValueChange: any }) => {

  const {data = {}, isLoading, queryImpl, onChange} = usePicture(name + '');

  return (
    <>
      <div className={'picTop'}>
        <DynamicForm
          layout={'inline'}
          fields={defaultFormConfig}
          onSubmit={queryImpl}
          saveText={'查询'}
        />
        <UploadImg name={name}/>
      </div>
      <div style={{ border: 'solid 1px #e1e1e1', padding: 10 }}>
        <Spin spinning={isLoading}>
          <Items
            onValueChange={onValueChange}
            defaultKeys={defaultValue}
            total={data.total}
            onChange={onChange}
            data={data.list}
          />
        </Spin>
      </div>
    </>
  )
}
