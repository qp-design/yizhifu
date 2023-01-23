import {DynamicForm, DetailImage, TransformType, FieldType} from '@brushes/components';
import { uploadImpl } from '@brushes/store';
import { message } from "antd";
import React from 'react';

const fieldConfig: Array<FieldType>  = [
  {
    label: '上传图片',
    name: 'basicImg',
    type: 'upload',
    rules: [{required: true, message: '请选择图片'}],
    extraProps: {
      render: DetailImage,
      suffixicon: <span style={{fontSize: 12, color: '#999'}}>建议上传1Mb以内的图片</span>,
      accept: "image/*",
      maxCount: 1,
      listType: "picture-card",
      text: '上传图片',
    }
  },
]

export const transformDataConfig: Array<TransformType> = [
  {
    from: 'basicImg',
    to: 'basicImge',
    format: async (files: any) => {
      const { size } = files[0]
      const limited = size / 1024 / 1024 < 1;
      if (!limited) {
        throw new Error("上传失败，图片不可超过1MB!")
      }
      return await uploadImpl(files)
    }
  }
];
const UploadForm = ({onSubmit}: {onSubmit: () => void}) => {

  return (
    <div style={{padding: 5, marginTop: 15 }}>
    <DynamicForm
      transformSubmitDataConfig={transformDataConfig}
      fields={fieldConfig}
      onSubmit={onSubmit}
      saveText={'保存'}
    />
    </div>
  )
}

export default UploadForm;
