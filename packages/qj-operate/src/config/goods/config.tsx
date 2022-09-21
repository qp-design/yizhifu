import React from 'react';
import { FieldType } from '@brushes/components';
import { ColumnsType } from 'antd/es/table';

export const defaultFormConfig: Array<FieldType> = [
    {
        label: '商品名称',
        name: 'goodsName',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品名称'
        }
    },
    {
        label: '商品编号',
        name: 'goodsNo',
        type: 'text',
        extraProps: {
            placeholder: '请输入商品编号'
        }
    },
    {
        label: '是否上架',
        name: 'dataOpbillstate',
        type: 'select',
        extraProps: {
            allowClear: 'true',
            style: {
                width: '100%'
            },
            placeholder: '请输入商品名称',
            options: [
                {
                    label: '全部',
                    value: ''
                },
                {
                    label: '是',
                    value: '1'
                },
                {
                    label: '否',
                    value: '0'
                }
            ]
        }
    },
];


export const defaultColumns: ColumnsType<any> = [
    {
        title: '序号',
        dataIndex: 'orderNumber',
        width: 80,
        render: (text: any, data: object, ind: number) => ind + 1
    },
    {
        title: '商品名称',
        width: 200,
        dataIndex: 'goodsName',
        key: 'goodsName'
    },
    {
        title: '商品编号',
        width: 150,
        dataIndex: 'goodsShowno',
        key: 'goodsShowno'
    },
    {
        width: 120,
        title: '价格',
        dataIndex: 'pricesetNprice',
        key: 'pricesetNprice'
    },
    {
        title: '库存',
        width: 80,
        dataIndex: 'goodsNum',
        key: 'goodsNum'
    },
    {
        title: '分类',
        width: 150,
        dataIndex: 'classtreeName',
        key: 'classtreeName'
    },
    {
        title: '品牌',
        width: 150,
        dataIndex: 'brandName',
        key: 'brandName'
    },
];
