import React from 'react';
import { dynamicFormFields } from '@brushes/components';
import {Form} from 'antd';
// @ts-ignore
import {NodeGraph} from 'qj-shared-library';
import {useMaterialsOperate} from '../../hooks';

const IndexReact = ({defaultValue}: { defaultValue: NodeGraph }) => {
  const [form] = Form.useForm();
  const { formConfig = [], title, info, callbackImpl, initialValues } = useMaterialsOperate(defaultValue, form);
  return (
    <Form
      form={form}
      onValuesChange={callbackImpl}
      initialValues={initialValues}
    >
      <div className={'inner-operate'}>
        <div className={'title'}>{title}</div>
        <p className={'info'}>{info}</p>
        {
          dynamicFormFields(formConfig, form)
        }
      </div>
    </Form>
  )
}

export default IndexReact;
