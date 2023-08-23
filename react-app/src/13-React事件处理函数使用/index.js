import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <input onBlur={this.inputOnBlur} type="text" placeholder="请输入"/>
            </div>
        );
    }

    //event为事件对象，event.target为事件源对象
    inputOnBlur = event => {
        alert(event.target.value)
    }
}

export default Index;

/**
 * 1.React使用的是自定义事件，而不是原生的DOM事件，应为面对不同浏览器版本React做了兼容性处理。
 * 2.React中的事件通过事件委托方式处理，委托给最外层的原素。
 */