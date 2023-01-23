import React, {useEffect} from 'react';
import {dynamicFormFields, NamePath} from '@brushes/components';
import {FormInstance} from 'antd';
// @ts-ignore
import {useLowCodeGraph} from 'qj-shared-library';
import { _ } from '@brushes/tools';
const { maxBy } = _;

function getImageBounding(list: Array<Object>, computedName: string) {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    const url = list[i];
    arr.push(new Promise((resolve) => {
      const img = new Image();
      img.onload = function () {
        resolve({width: img.width, height: img.height});
      }
      // @ts-ignore
      img.src = url[computedName];
    }))
  }
  return arr;
}


export const ComputedImg = ({
  name,
                              form,
                              computedName
                            }: { name: NamePath; computedName: string; form: FormInstance }) => {
  const value = form.getFieldValue('selectImg');
  const monitorInstance = useLowCodeGraph();
  useEffect(() => {
    (async () => {
      const flag = value.every((item: any) => !!item);
      if(!flag) return;
      const result = await Promise.all(getImageBounding(value, computedName)) as Array<{height: number, width: number}>;
      const res = maxBy(result, (item: {height: number; width: number}) => item.height)
      form.setFieldValue(name, res);
      const values = form.getFieldsValue();
      monitorInstance.updateNode(values);
    })()
  }, [value]);

  return (
    <div style={{marginBottom: 10}}>
      {dynamicFormFields([{
        label: '图片属性(px)',
        name,
        type: 'slot',
        extraProps: {
          render: ({name, form}: { name: NamePath; form: FormInstance}) => {
            const value = form.getFieldValue(name) || {};
            return <>最大高度：{value.height}, 宽度： {value.width}</>
          }
        }
      }], form)}
    </div>
  )
}
