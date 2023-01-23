import React, {useState, useMemo} from 'react';
import {FormInstance, Image, Form} from 'antd';
import Modal from 'antd/es/modal/Modal';
import { Wrapper } from '@brushes/materials'
import {NamePath, QjIcon} from '@brushes/components';
import TabsPic from './component';

export function SelectPicture({form, name, parentName = []}: { name: NamePath; parentName?: Array<any>; form: FormInstance }) {

  const value = form.getFieldValue(parentName.concat(name))
  const [isModalVisible, setIsModalVisible] = useState(false);
  const computedName = useMemo(() => parentName.concat(name), [parentName, name]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className={'choose-container'} onClick={showModal}>
        {
          value ?
            <Image
              preview={{
                mask: '重选',
                visible: false
              }}
              width={86}
              height={86}
              src={value}
            />
            :
            <div className={'choose'}>
              <QjIcon style={{ fontSize: '24px', color: '#888', display: 'block' }} name={'icon-shurukuang-shangchuantupian'}></QjIcon>
              <p>上传</p>
            </div>
        }
      </div>

      <Modal
        destroyOnClose={true}
        width={860}
        title="选择图片"
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}>
        <Wrapper>
          <TabsPic name={computedName} handleCancel={handleCancel} form={form}/>
        </Wrapper>
      </Modal>
    </>
  )
}
