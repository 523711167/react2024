import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <input ref="input" type="text" placeholder="请输入"/>
                <button onClick={this.showInput}>请点击</button>
            </div>
        );
    }

    showInput = () => {
        console.log(this.refs);
        alert(this.refs.input.value)
    }
}

export default Index;