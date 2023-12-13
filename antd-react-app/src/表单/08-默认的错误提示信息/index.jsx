import React from 'react';
import {Button, ConfigProvider, Form, Input} from "antd";

/**
 *
 * @Author pxx
 * @DATA 2023/12/11 10:54
 */
const validateMessages = {
    required: "${label} 是必选字段",
    // ...
};
function Index() {
    return (
        <ConfigProvider form={{ validateMessages }}>
            <Form >
                <Form.Item
                    name="username"
                    label="用户名"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Please input your name" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType={"submit"}>
                        Check
                    </Button>
                </Form.Item>
            </Form>

        </ConfigProvider>
    )
}

export default Index;