import React, {Component} from 'react';

class Index extends Component {



    render() {
        return (
            <div>
                <Table/>
                <Table2/>
            </div>
        );
    }



}

export default Index;


class Table extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    用户名<input onChange={ this.saveFormDate('username') }  name="username" type="text"  placeholder="用户名"/>
                    密码<input  onChange={ this.saveFormDate('password') } name="password" type="text"  placeholder="密码"/>
                    <button>登录</button>
                </form>
            </div>
        )
    }

    login = event => {
        event.preventDefault()
        alert(`用户名是${this.state.username},密码是${this.state.password}`)
    }

    saveFormDate = filed => {
        console.log('@@');
        return event => {
            this.setState({ [filed]: event.target.value })
        }
    }
}

class Table2 extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    用户名<input onChange={ event => { this.saveFormDate('username', event);console.log('@'); } }  name="username" type="text"  placeholder="用户名"/>
                    密码<input   onChange={ event => { this.saveFormDate('password', event);console.log('@'); } } name="password" type="text"  placeholder="密码"/>
                    <button>登录</button>
                </form>
            </div>
        )
    }

    login = event => {
        event.preventDefault()
        alert(`用户名是${this.state.username},密码是${this.state.password}`)
    }

    saveFormDate = (filed, event) => {
        this.setState({ [filed]: event.target.value })
    }
}