import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                jsx语法规则
                - 定义虚拟DOM时，不要写引号
                - 标签混入JS表达式要用{}
                - 样式的类名指定不要用class，要用className
                - 内联样式，style=width: 200 px
                - 只能有一个根标签
                - 标签字母
                - 小写字母开头，识别为html标签
                - 大写字母开头，识别为组件
            </div>
        );
    }
}

export default Index;