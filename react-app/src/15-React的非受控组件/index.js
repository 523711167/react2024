import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    用户名<input ref="username" name="username" type="text"  placeholder="用户名"/>
                    密码<input ref="password" name="password" type="text"  placeholder="密码"/>
                    <button >登录</button>
                </form>
            </div>
        );
    }

    login = event => {
        event.preventDefault()
        alert(`用户名是${this.refs.username.value},密码是${this.refs.password.value}`)
    }
}

export default Index;