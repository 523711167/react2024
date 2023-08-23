import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <input ref={this.saveInput} type="text" placeholder="请输入"/>
                <button onClick={this.showInput}>请点击</button>
            </div>
        );
    }

    saveInput = current => {
        this.input = current
    }

    showInput = () => {
        alert(this.input.value)
    }
}

export default Index;