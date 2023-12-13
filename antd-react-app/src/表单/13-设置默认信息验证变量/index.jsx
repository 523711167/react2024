import React from 'react';
import {Button, Form, Input} from "antd";

const onFinish = (values) => {
    console.log('values =', values)
}
/**
 *
 * @Author pxx
 * @DATA 2023/12/11 13:38
 */
function Index() {
    return (
        <Form onFinish={onFinish}>
            <Form.Item
                name={'username'}
                validateTrigger={'onBlur'}
                messageVariables={{ another: 'good' }}
                label="user"
                rules={[{ required: true, message: '${another} is required' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'password'}
                messageVariables={{ label: 'good' }}
                label={<span>user</span>}
                rules={[{ required: true, message: '${label} is required' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Index;