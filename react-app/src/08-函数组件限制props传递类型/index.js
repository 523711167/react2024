import React from "react";
import PropTypes from "prop-types";

export default function () {
    return (
        <div>
            <Person name={"萌萌"} age="16" sex={"女"}/>
        </div>
    )
};


function Person(props) {
    let { name, age, sex } = props
    return (
        <div>
            我叫{name}，今年{age}岁,性别{sex}
        </div>
    )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string
}

Person.defaultProps = {
    sex: '女',
    age: 17,
    name: "萌萌"
}