import {FieldType} from '@brushes/components';
export const formConfig: Array<FieldType> = [
  {
    label: '页面名称',
    name: 'cell',
    type: 'text',
    rules: [{required: true, message: '请输入标题'}],
  },
  // {
  //   label: '主题色',
  //   name: 'circular',
  //   type: 'radioGroup',
  //   extraProps: {
  //     options: [
  //       {
  //         value: 1,
  //         label: '浅色'
  //       },
  //       {
  //         value: 2,
  //         label: '深色'
  //       },
  //     ]
  //   }
  // },
  {
    label: '页头文字颜色',
    name: 'topColor',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 1,
          label: '浅色'
        },
        {
          value: 2,
          label: '深色'
        },
      ]
    }
  },
]

export const title = '页面配置';
export const info = '灵活设置展示样式。';
export const initialValues = {
  cell: 1,
  circular: 1,
}
