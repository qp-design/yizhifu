import React, {useEffect} from 'react';
import { dynamicFormFields } from '@brushes/components';
import * as config from '../config';
import Form from 'antd/es/form';
import {useForm} from 'antd/es/form/Form';
import useImmutableCallback from '@brushes/components/dist/components/form/hooks/useImmutableCallback';
import {NodeGraph, useLowCodeGraph} from 'qj-shared-library';
import { _ } from '@brushes/tools';

const { get, omit } = _;
const IndexReact = ({defaultValue}: { defaultValue: NodeGraph }) => {
  const [form] = useForm();
  const monitorInstance = useLowCodeGraph(1);
  const initialValues = defaultValue.props;
  const { formConfig, title, info } = get(config, defaultValue.type, {});
  const callbackImpl = useImmutableCallback((changedValues: any, allValues: any) => {
    monitorInstance.updateNode(allValues)
  });

  useEffect(() => {
    const props = omit(initialValues, 'defaultValue');
    form.setFieldsValue(props);
  }, [initialValues]);

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
