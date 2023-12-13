import React from 'react';
import { Button, Form, Input, message, Space } from 'antd';


/**
 *
 * @Author pxx
 * @DATA 2023/12/10 16:51
 */
function Index() {
    const [form] = Form.useForm();
    const onFinish = () => {
        message.success('Submit success!');
    };
    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    const onFill = () => {
        //设置表单属性
        form.setFieldsValue({
            url: 'https://taobao.com/',
        });
    };
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                name="url"
                label="URL"
                rules={[
                    {
                        required: true,
                    },
                    {
                        type: 'url',
                        //出现警告，不再是错误，并且不影响表单的提交
                        warningOnly: true
                    }
                ]}
            >
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onFill}>
                        Fill
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
}

export default Index;