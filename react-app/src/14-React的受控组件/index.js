import React, {Component} from 'react';

class Index extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    用户名<input onChange={this.saveUsername}  name="username" type="text"  placeholder="用户名"/>
                    密码<input  onChange={this.savePassword} name="password" type="text"  placeholder="密码"/>
                    <button >登录</button>
                </form>
            </div>
        );
    }

    login = event => {
        event.preventDefault()
        alert(`用户名是${this.state.username},密码是${this.state.password}`)
    }

    savePassword = event => {
        this.setState({password : event.target.value})
    }

    saveUsername = event => {
        this.setState({username : event.target.value})

    }
}

export default Index;