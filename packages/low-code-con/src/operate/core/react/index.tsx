import React, {useEffect, useState} from 'react';
import {Form} from 'antd';
import Collapse  from 'antd/es/collapse';
// @ts-ignore
import {NodeGraph, useLowCodeGraph} from 'qj-shared-library';
import { Pages } from '../../config'
import IndexReact from './index-react';
import { _ } from '@brushes/tools';
import { useImmutableCallback } from '@brushes/components';
import { dynamicFormFields } from '@brushes/components';

const { isEmpty } = _;
const { Panel } = Collapse;

const PageIndex = ({defaultValue}: { defaultValue: NodeGraph }) => {
  const [form] = Form.useForm();
  const [activedKey, setActivedKey] = useState('2');
  const monitorInstance = useLowCodeGraph();
  useEffect(() => {
    const key = !isEmpty(defaultValue) ? '2' : '1';
    setActivedKey(key)
  }, [defaultValue]);

  const onChange = useImmutableCallback(() => {
    setActivedKey(prevState => prevState === '2' ? '1' : '2')
  })

  const callbackImpl = useImmutableCallback((changedValues: any, allValues: any) => {
    // const pageConfig = monitorInstance.lowCodeGraph.pageConfig;
    monitorInstance.lowCodeGraph.pageConfig = allValues
  });

  return (
    <>
      <Collapse
        onChange={onChange}
        style={{background: '#fff'}}
        activeKey={[activedKey]}
        bordered={false}
        expandIconPosition={'end'}
      >
        <Panel
          header={
            <div className={'pageTitle'}>
              {Pages.title}
            </div>
          }
          key="1">
          <div>
            <Form
              form={form}
              onValuesChange={callbackImpl}
              // initialValues={initialValues}
            >
                <p style={{color: '#777'}}>{Pages.info}</p>
                {
                  dynamicFormFields(Pages.formConfig, form)
                }
            </Form>
          </div>
        </Panel>
      </Collapse>
      {/*<IndexReact key={defaultValue.id} defaultValue={defaultValue}/>*/}
      {
        !isEmpty(defaultValue) ? <IndexReact key={defaultValue.id} defaultValue={defaultValue}/> : null
      }
    </>
  )
}

export default PageIndex;
