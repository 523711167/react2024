import React from 'react';
import {connect} from "react-redux";
import {fetchLoading} from "../../redux/reducer/loading";

/**
 *
 * @Author pxx
 * @DATA 2023/8/30 00:02
 */
function Loading(props) {
    let { count, fetchLoading } = props;
    let changeCount = () => {
        fetchLoading(10)
    }

    return (
        <div>
            <h1>我是Loading组件，点击Button之后，在Promise的pendding期间为999，fulfilled为10</h1>
            我的值是{count}
            <button onClick={changeCount}>变成10吧</button>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        count: state.loadings.count
    }
}

const mapDispatchToProps = {
    fetchLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
