import React from 'react';
import {Form, Input, InputNumber, Typography} from 'antd';

/**
 *
 * @Author pxx
 * @DATA 2023/12/10 16:58
 */
function Index() {
    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    // 监听所有字段的变化
    const customValue = Form.useWatch((values) => {
        console.log('values =', values)
        return `name: ${values.name || ''}`
    }, form);
    return (
        <>
            <Form form={form} layout="vertical" autoComplete="off">
                <Form.Item name="name" label="Name (Watch to trigger rerender)">
                    <Input/>
                </Form.Item>
                <Form.Item name="age" label="Age (Not Watch)">
                    <InputNumber/>
                </Form.Item>
            </Form>

            <Typography>
                <pre>Name Value: {nameValue}</pre>
                <pre>Custom Value: {customValue}</pre>
            </Typography>
        </>
    );
}

export default Index;