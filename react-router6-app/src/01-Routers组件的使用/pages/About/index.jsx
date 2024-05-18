import React, {Component} from 'react';

class About extends Component {

    render() {

        const start = new Date().getTime();
        const end = start + 3000;

        while (new Date().getTime() < end) {
            // 空循环等待3秒
        }

        return (
            <div>
                About
            </div>
        );
    }
}

export default About;