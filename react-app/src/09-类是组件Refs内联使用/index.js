import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <input ref={ current => this.input = current } type="text" placeholder="请输入"/>
                <button onClick={this.showInput}>请点击</button>
            </div>
        );
    }

    showInput = () => {
        console.log(this.input);
        alert(this.input.value)
    }
}

export default Index;

/**
 * 1.组件初始化就会执行内联函数，完成赋值操作
 * 2.在使用内联函数，更新DOM的时候，内联函数会执行两次，第一次传递null，第二次会传递DOM对象
 */