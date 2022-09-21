import {FieldType, NamePath, Wrapper} from '@brushes/components';
import { Button, FormInstance, Form } from 'antd';
import React, {useState, useEffect} from 'react';
import Modal from 'antd/es/modal/Modal';
import {GoodsJsx} from './goods';
import {useLowCodeGraph} from 'qj-shared-library';
export const formConfig: Array<FieldType> = [
  {
    label: '选择模版',
    name: 'cell',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 1,
          label: '一行1个'
        },
        {
          value: 2,
          label: '一行2个'
        },
      ]
    }
  },
  {
    label: '是否圆角',
    name: 'circular',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 1,
          label: '圆角'
        },
        {
          value: 2,
          label: '直角'
        },
      ]
    }
  },
  {
    label: '间距',
    name: 'margin',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 8,
          label: '小'
        },
        {
          value: 10,
          label: '中'
        },
        {
          value: 15,
          label: '大'
        },
      ]
    }
  },
  {
    label: '划线价',
    name: 'markedPrice',
    type: 'radioGroup',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      options: [
        {
          value: 1,
          label: '显示'
        },
        {
          value: 2,
          label: '隐藏'
        },
      ]
    }
  },
  {
    label: '选择商品',
    name: 'goods',
    type: 'slot',
    rules: [{required: true, message: '请输入标题'}],
    extraProps: {
      render: ({form, name}: { name: NamePath; form: FormInstance }) => {
        const num = form.getFieldValue('goods')?.length || 0;
        const [isModalVisible, setIsModalVisible] = useState(false);

        const showModal = () => {
          setIsModalVisible(true);
        };
        const handleCancel = () => {
          setIsModalVisible(false);
        };

        return (
          <>
            <Button onClick={showModal} style={{padding: 0}} type={'link'}>
              { num > 0 ? `已选择${num}个商品` : '选择商品' }
            </Button>
            <Modal
              width={800}
              title="选择商品"
              open={isModalVisible}
              footer={null}
              onCancel={handleCancel}>
              <Wrapper>
                <GoodsJsx handleCancel={handleCancel} form={form}/>
              </Wrapper>
            </Modal>
          </>
        )
      }
    }
  },
]

export const title = '商品配置';
export const info = '商品设置多用于商品分类模块，可与标题组合使用，且灵活设置商品展示样式。';
