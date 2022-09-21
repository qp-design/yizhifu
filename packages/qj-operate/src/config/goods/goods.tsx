import {Button, Form, FormInstance, Space, Table} from 'antd';
import {
  useGoods,
} from '@brushes/store';
import {SpacingJsx} from '@brushes/components';
import {SearchMaterials} from '@brushes/materials';
import {defaultFormConfig, defaultColumns} from './config';
import React, {useEffect, useRef} from 'react';
import {TableRowSelection} from 'antd/es/table/interface';
import {useLowCodeGraph} from 'qj-shared-library';

export const GoodsJsx = ({form, handleCancel}: { form: FormInstance; handleCancel: Function }) => {
  const monitorInstance = useLowCodeGraph(1);
  const {data = {}, pagination, isLoading, queryImpl, onChange} = useGoods('goods');
  const ref = useRef<Array<string | number>>([]);
  const goods = Form.useWatch('goods', form);
  useEffect(() => {
    if(!goods) return
    const values = form.getFieldsValue();
    monitorInstance.updateNode({ ...values, goods })
  }, [goods])

  // rowSelection objects indicates the need for row selection
  const rowSelection: TableRowSelection<any> = {
    onChange: (selectedRowKeys) => {
      ref.current = selectedRowKeys
    },
  };

  const saveImpl = () => {
    form.setFieldValue('goods', ref.current)
    handleCancel()
  }

  return (
    <>
      <SearchMaterials
        defaultColumns={defaultColumns}
        defaultFormConfig={defaultFormConfig}
        queryImpl={queryImpl}
        drawerTitle={'商品模块配置'}
        render={(height: number, columns: Array<any>) =>
          <SpacingJsx>
            <Table
              loading={isLoading}
              scroll={{
                scrollToFirstRowOnChange: true,
                y: height - 45,
              }}
              sticky
              rowSelection={{...rowSelection}}
              onChange={onChange}
              rowKey={'goodsCode'}
              columns={columns}
              dataSource={data.list}
              pagination={pagination}
            />
          </SpacingJsx>
        }
      />
      <div style={{textAlign: 'right', marginTop: -20, paddingBottom: 20}}>
        <Space align={'end'}>
          <Button onClick={() => handleCancel()}>取消</Button>
          <Button type="primary" onClick={saveImpl}>保存</Button>
        </Space>
      </div>
    </>
  )
}
