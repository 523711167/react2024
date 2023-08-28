import React, {Component} from 'react';
import { Navigate } from 'react-router-dom'

class Home extends Component {

    state = {
        count: 0
    }

    render() {
        return (
            <div>
                Home
                {
                    this.state.count === 5 ? <Navigate to={"/about"} repalce={false} /> : `当前值为${this.state.count},加到5就会自动重定向到About`
                }
                <button onClick={this.add}>+1</button>
            </div>
        );
    }

    add = () => {
        this.setState({ count: this.state.count + 1 });
    }
}

export default Home;