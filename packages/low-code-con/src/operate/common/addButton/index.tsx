import React from "react";
import {Button} from "antd";
import PlusOutlined from '@ant-design/icons/plusOutlined';

const AddButton = ({add, title='添加链接'}: any) => {
  return (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      style={{
        width: '100%',
        marginBottom: 24,
      }}
      onClick={add}
    >{title}</Button>
  )
}


export default AddButton;
