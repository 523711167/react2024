import React from 'react';
import { connect } from "react-redux";

import CountUI from '../../component/Count'
import {createAddAc, createSubAc, createSubSyncAc} from "../../redux/count_action";

function mapStateToProps(state) {
    return {
        count: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: data => { dispatch(createAddAc(data)) },
        sub: data => { dispatch(createSubAc(data)) },
        addSync: data => { dispatch(createSubSyncAc(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);