import React from 'react';
import {Table} from "antd";

/**
 *
 * @Author pxx
 * @DATA 2023/12/14 21:16
 */
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        // defaultFilteredValue 设置初始化默认的筛选值
        // 设置筛选条件展示效果 菜单效果或者树效果
        filterMode: 'tree',
        // 受控菜单是否可见
        // filterDropdownOpen: false,
        // 受控筛选图标高亮
        // filtered: true,
        // 受控筛选值
        // filteredValue: ['Jim'],
        // filterIcon 自定义图标
        // filterMultiple 是否多选
        // 筛选值是否可以搜索 支持boolean、函数返回boolean
        filterSearch: true,
        // 暂时不知道自定义怎么玩
        // filterSearch: (input, record) => {
        //     if (input === 12) {
        //         return true
        //     }
        //     return false
        // },
        //filters 筛选的条件
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // onFilter 筛选函数 filters和onFilter配置达到筛选目的
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: {
            compare: (a, b) => a.name.length - b.name.length,
            multiple: 1
        },
        // sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend', 'ascend'],
        //受控排序方式
        // sortOrder: 'descend',
        showSorterTooltip: {
            title: () => '点击我进行排序'
        }
    },
    {
        title: 'Age',
        dataIndex: 'age',
        //表头Tooltip提示
        showSorterTooltip: {
            title: () => ('我要修改提示')
        },
        //初始化默认的排序
        defaultSortOrder: 'descend',
        // 支持排序种类，顺便对应图标按钮展示,如果设置在table上，代表所有列
        sortDirections: ['descend', 'ascend'],
        // 受控排序属性
        // sortOrder: 'ascend',
        //排序函数
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: 'Height',
        dataIndex: 'height',
        sorter: {
            compare: (a, b) => a.height - b.height,
            multiple: 2
        },
        // sorter: (a, b) => {
        //     return a.height - b.height
        // },
        // 受控排序方式，一列设置，其余列都必须使用受控
        // 受控排序只支持对一种排序有效、比如多列排序和单列排序(单列只对一列有效，如需多列有效使用多列排序) 互斥
        // sortOrder: 'ascend',
        sortDirections: ['descend', 'ascend'],
    }
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        height: 180
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        height: 181
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        height: 179
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        height: 155
    },
];
//table表格的onChange分页、排序、筛选变化时触发
//extra 保存action currentDataSource
//sorter 数组 每列当前排序的条件
//filters 每列当前的筛选的条件
//pagination 分页的数据对象
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

function Index() {
    return (
        <>
            <Table columns={columns} dataSource={data} onChange={onChange}/>;
        </>
    )
}

export default Index;