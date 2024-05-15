import React, {useState} from 'react';
import {Tree} from "antd";

/**
 * dropToGap：boolean类型，true代表拖拽到节点之间的缝隙中，false代表拖拽到节点上，即节点的内容区。
 * dropPosition：拖拽的时候，针对一个节点有三种情况，即拖拽到节点之上，拖拽到节点上，拖拽到节点之下。三种情况其值有所不同。
 * antd 依赖了 rc-tree，在 rc-tree 里 dropPosition 是一个相对地址。
 * 如果拖到了目标节点的上面则当前元素 -1，下面则是 1（* rc-tree这块不确定具体情况*）。
 * antd 里则是相对于目标节点的 index针对拖动情况计算出来。
 * 拖拽到节点之上： 该节点的 index-1
 * 拖拽到节点上：dropPosition 就是该节点的 index。
 * 拖拽到节点之下：该节点的 index+1
 * @Author pxx
 * @DATA 2024/3/19 16:11
 */
const x = 3;
const y = 2;
const z = 1;
const defaultData = [];
const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || defaultData;
    const children = []
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({
            title: key, key,
        });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);

function Index() {
    const [gData, setGData] = useState(defaultData);
    const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);
    const onDragEnter = (info) => {
        console.log(info);
        // expandedKeys, set it when controlled is needed
        // setExpandedKeys(info.expandedKeys)
    };
    const onDrop = (info) => {
        console.log(info);
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        // the drop position relative to the drop node, inside 0, top -1, bottom 1
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loop = (data, key, callback) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === key) {
                    return callback(data[i], i, data);
                }
                if (data[i].children) {
                    loop(data[i].children, key, callback);
                }
            }
        };
        const data = [...gData];
        debugger
        // Find dragObject
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert.
                // New item was inserted to the start of the array in this example,
                // but can be anywhere
                item.children.unshift(dragObj);
            });
        } else {
            let ar = [];
            let i;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                // Drop on the top of the drop node
                ar.splice(i, 0, dragObj);
            } else {
                // Drop on the bottom of the drop node
                ar.splice(i + 1, 0, dragObj);
            }
        }
        setGData(data);
    };
    return (<Tree
            className="draggable-tree"
            defaultExpandedKeys={expandedKeys}
            draggable
            blockNode
            onDragOver={onDragEnter}
            onDrop={onDrop}
            treeData={gData}
        />);
}

export default Index;