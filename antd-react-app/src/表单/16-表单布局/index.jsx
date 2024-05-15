import React, {useState} from 'react';
import {Button, Form, Input, Radio} from "antd";

/**
 *
 * @Author pxx
 * @DATA 2024/3/20 16:08
 */

function Index() {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({layout}) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;
    return (
        <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{
                layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}
            style={{
                maxWidth: formLayout === 'inline' ? 'none' : 600,
            }}
        >
            <Form.Item label="Form Layout" name="layout">
                <Radio.Group value={formLayout}>
                    <Radio.Button value="horizontal">Horizontal</Radio.Button>
                    <Radio.Button value="vertical">Vertical</Radio.Button>
                    <Radio.Button value="inline">Inline</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Field A">
                <Input placeholder="input placeholder"/>
            </Form.Item>
            <Form.Item label="Field B">
                <Input placeholder="input placeholder"/>
            </Form.Item>
            <Form.Item label="Field C"
                        //    Form.Item 等效于Row
                        //    wrapperCol控制 input
                        //    labelCol控制   label
                       wrapperCol={{
                        span: 10,
                        offset: 4
                        }}
                       labelCol={{
                           span: 8,
                           offset: 2
                       }}
            >
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form>
    );
}

export default Index;