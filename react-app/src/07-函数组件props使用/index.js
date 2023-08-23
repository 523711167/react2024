import React from "react";

export default function () {
    return (
        <div>
            <Person name={"萌萌"} age="17" sex={"女"}/>
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