import React from 'react';
import {Table} from "antd";

/**
 *
 * @Author pxx
 * @DATA 2023/12/15 16:28
 */
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    // 单独控制展开和选择框所在列
    // Table.EXPAND_COLUMN,
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    Table.SELECTION_COLUMN,
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    },
];
const data = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
];
function Index() {
    return (
        <Table
            rowSelection={{}}
            columns={columns}
            //渲染展开行的内容
            //record 行记录
            //index 行下标
            //indent 行缩进 暂时不理解
            //expanded 是否展开
            expandable={{
                expandedRowRender: (record, index, indent, expanded) => {
                    console.log('record, index, indent, expanded =', record, index, indent, expanded)
                    return (
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            {record.description}
                        </p>
                    )
                },
                //设置是否允许行展开
                rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={data}
        />
    )
}

export default Index;