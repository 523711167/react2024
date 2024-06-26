import React from 'react';
import {Table} from "antd";

/**
 *
 * @Author pxx
 * @DATA 2023/12/15 16:47
 */
const sharedOnCell = (_, index) => {
    if (index === 1) {
        return {
            colSpan: 0,
        };
    }
    return {};
};
const columns = [
    {
        title: 'RowHead',
        dataIndex: 'key',
        //设置列范围	不太明白
        rowScope: 'row',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
        onCell: (_, index) => ({
            colSpan: index === 1 ? 5 : 1,
        }),
    },
    {
        title: 'Age',
        dataIndex: 'age',
        onCell: sharedOnCell,
    },
    {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        onCell: (_, index) => {
            if (index === 3) {
                return {
                    rowSpan: 2,
                };
            }
            // These two are merged into above cell
            if (index === 4) {
                return {
                    rowSpan: 0,
                };
            }
            if (index === 1) {
                return {
                    colSpan: 0,
                };
            }
            return {};
        },
    },
    {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        onCell: sharedOnCell,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        onCell: sharedOnCell,
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
    },
];
function Index() {
    return (
        <>
            <Table columns={columns} dataSource={data} bordered />
        </>
    )
}

export default Index;