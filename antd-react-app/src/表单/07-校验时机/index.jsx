import React from 'react';
import { Alert, Form, Input } from 'antd';

/**
 *
 * @Author pxx
 * @DATA 2023/12/10 21:18
 */
function Index() {
    return (
        <Form
            name="trigger"
            style={{
                maxWidth: 600,
            }}
            layout="vertical"
            autoComplete="off"
        >
            <Alert message="Use 'max' rule, continue type chars to see it" />

            <Form.Item
                hasFeedback
                label="Field A"
                name="field_a"
                //设置触发校验的条件
                validateTrigger="onBlur"
                rules={[
                    {
                        max: 3,
                    },
                ]}
            >
                <Input placeholder="Validate required onBlur" />
            </Form.Item>

            <Form.Item
                hasFeedback
                label="Field B"
                name="field_b"
                //延迟毫秒数后进行校验
                validateDebounce={1000}
                rules={[
                    {
                        max: 3,
                    },
                ]}
            >
                <Input placeholder="Validate required debounce after 1s" />
            </Form.Item>

            <Form.Item
                hasFeedback
                label="Field C"
                name="field_c"
                // 校验从上至下， validateFirst表示第一行校验不通过就停止，不进行后续验证
                validateFirst
                rules={[
                    {
                        max: 3,
                        message: 'Continue input to exceed 3 chars',
                    },
                    {
                        max: 6,
                        message: 'Continue input to exceed 6 chars',
                    },
                ]}
            >
                <Input placeholder="Validate one by one" />
            </Form.Item>
        </Form>
    )
}

export default Index;