import React, {Component} from 'react';

class Index extends Component {

    inputRef = React.createRef();

    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text" placeholder="请输入"/>
                <button onClick={this.showInput}>请点击</button>
            </div>
        );
    }

    showInput = () => {
        alert(this.inputRef.current.value)
    }
}

export default Index;