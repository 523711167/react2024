import React, {useState} from 'react';
import { Divider, Radio, Table } from 'antd';

/**
 *
 * @Author pxx
 * @DATA 2023/12/14 19:20
 */
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        //可以控制单元格属性、绑定事件
        onCell: (record, rowIndex) => {
            return {
                style: {
                    background: rowIndex % 2 === 0 ? '#f5f5f5' : '#af1818',
                },
                onClick: (e) => {
                }
            }
        }
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sydney No. 1 Lake Park',
    },
];

const rowSelection = {
    //选中元素后的回调函数
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    //返回对象控制checkbox属性
    getCheckboxProps: (record) => {
        return {
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }
    },
};
function Index() {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Radio.Group
                onChange={({target: {value}}) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider/>

            <Table
                //主要是针对选择框的设置
                rowSelection={{
                    //表头全选、自定义标题(columnTitle)隐藏
                    hideSelectAll: true,
                    // columnTitle: () => (111),
                    type: selectionType,
                    //控制选择框的属性，5.5.0版本才可以用
                    onCell: (record, rowIndex) => {
                        return {
                            onClick: () => {
                                alert(11)
                            }
                        }
                    },
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default Index;