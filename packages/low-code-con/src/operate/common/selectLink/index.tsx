import {Button, FormInstance, Form} from "antd";
import React, {useMemo, useRef, useState} from "react";
import Modal from "antd/es/modal/Modal";
import {LinkContent} from "./linkContent";
// @ts-ignore
import {useLowCodeGraph} from "qj-shared-library";
import {NamePath} from "@brushes/components";

import './index.scss';



interface LinkType {
  name: NamePath; parentName?: Array<any>; form: FormInstance
}

export interface resultDataType {
  label: string
  value: string
}

export const SelectLink: React.FC<LinkType> = ({form, name, parentName= []}) => {

  const computedName = useMemo(() => parentName.concat(name), [parentName, name]);

  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState<resultDataType | null>(null);
  const chosen = useRef<resultDataType | null>(form.getFieldValue(parentName.concat(name)));
  const monitorInstance = useLowCodeGraph();

  const chooseResult = () => {
    chosen.current = result;
    setModalShow(false);
    form.setFieldValue(computedName, chosen.current);
    const values = form.getFieldsValue();
    monitorInstance.updateNode(values);
  }

  const handleChoose = (item: resultDataType) => {
    setResult(item);
  }

  return (
    <>
      {
        chosen.current?
          <div className={'handle'}>
            <span>{chosen.current?.label}</span>
            <Button type="link" onClick={() => setModalShow(true)}>修改</Button>
          </div>:
          <Button type="link" onClick={() => setModalShow(true)} className={'init'}>请选择对应链接</Button>
      }
      <Modal title={'选择链接'} open={modalShow} onCancel={() => setModalShow(false)} width={800} onOk={chooseResult} okText={'确认'} cancelText={'取消'}>
          {result?.label}---{result?.value}
          <LinkContent result={result} handleChoose={handleChoose}/>
      </Modal>
    </>
  )
}
