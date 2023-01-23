import {memo} from 'react';
import {getEnv} from '@brushes/api';
import {config} from "./config";
import {useEditAddress} from "./hooks";
import {useComponent, antdMobile} from "@brushes/qj-simulate-component";
import {Skull} from "./components/skull";

const flag = getEnv();

const AddressDetailJsx = ({addressId = undefined}: any) => {
  const {View} = useComponent();
  const {Form, Button, Input} = antdMobile

  const {
    skullShow,
    form,
    area,
    defaultAddress,
    handleArea,
    handleDefaultAddress,
    handleFinish,
  } = useEditAddress(addressId, Form);

  return (
    <View className={'addressDetail'} style={{height: flag ? '100%' : '667px'}}>
      {
        skullShow?<Skull/>:
        <Form
          form={form}
          layout="horizontal"
          mode="card"
          onFinish={handleFinish}
          footer={
            <Button block type="submit" color="primary" size="large">
              提交
            </Button>
          }
        >
          {config.map((item, index) => {
            return (
              <Form.Item
                key={index}
                label={item.label}
                name={item.name}
                rules={item.rules}
                trigger={item.type === 'cascader' ? 'onConfirm' : 'onChange'}
                arrow={false}
              >
                {(() => {
                  if (item.type === 'input') {
                    return <Input {...item.props}/>;
                  } else if (item.type === 'switch') {
                    return <switch {...item.props} color={'#000'} onChange={handleDefaultAddress} checked={defaultAddress === '1'}/>;
                  } else if (item.type === 'cascader') {
                    return (
                      <>
                        {
                          flag ? <picker mode={'region'} onChange={handleArea} value={'123'}>
                            <View className={'areaWrap'}>
                              {!area.provinceName ? '请选择所在地区' :
                                `${area.provinceName}—${area.cityName}-${area.areaName}`
                              }
                            </View>
                          </picker> : '请选择所在地区'
                        }
                      </>
                    );
                  }
                })()}
              </Form.Item>
            );
          })}
        </Form>
      }
    </View>
  );
};

export const AddressDetail = memo(AddressDetailJsx);
