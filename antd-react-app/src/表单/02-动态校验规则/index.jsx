import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";

/**
 *
 * @Author pxx
 * @DATA 2023/12/10 15:13
 */
const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 8,
    },
};
const formTailLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 8,
        offset: 4,
    },
};
function Index() {
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);

    useEffect(() => {
        //验证单独某个字段,前端有效果展示
        form.validateFields(['nickname']);
    }, [checkNick, form]);

    const onCheckboxChange = (e) => {
        setCheckNick(e.target.checked);
    };

    const onCheck = async () => {
        try {
            //验证所有字段
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    return (
        <Form
            form={form}
            name="dynamic_rule"
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item
                {...formItemLayout}
                name="username"
                label="Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name',
                    },
                ]}
            >
                <Input placeholder="Please input your name" />
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                name="nickname"
                label="Nickname"
                rules={[
                    {
                        //控制required判断是否需要验证
                        required: checkNick,
                        message: 'Please input your nickname',
                    },
                ]}
            >
                <Input placeholder="Please input your nickname" />
            </Form.Item>
            <Form.Item {...formTailLayout}>
                <Checkbox checked={checkNick} onChange={onCheckboxChange}>
                    Nickname is required
                </Checkbox>
            </Form.Item>
            <Form.Item {...formTailLayout}>
                <Button type="primary" onClick={onCheck}>
                    Check
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Index;