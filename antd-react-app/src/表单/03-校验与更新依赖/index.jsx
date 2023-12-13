import React from 'react';
import { Alert, Form, Input, Typography } from 'antd';

/**
 *
 * @Author pxx
 * @DATA 2023/12/10 15:31
 */
function Index() {
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            name="dependencies"
            //禁止浏览器通过历史记录(以前输入表单的数据)自动填充表单的内容
            autoComplete="off"
            style={{
                maxWidth: 600,
            }}
            // 垂直布局
            layout="vertical"
        >
            <Alert message=" Try modify `Password2` and then modify `Password`" type="info" showIcon />

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            {/* Field */}
            <Form.Item
                label="Confirm Password"
                name="password2"
                //设置关联字段，password值发生改变，会触发password2的验证,也会触发更新(暂时不知道更新值的是啥)
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                    },
                    //自定义校验函数,入参form
                    ({ getFieldValue }) => ({
                        //入参 _     包含关联字段、当前字段、类型等等
                        //入参 value password2的值
                        validator(_, value) {
                            console.log('_ =', _)
                            console.log('value =', value)
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input />
            </Form.Item>

            {/* Render Props */}
            <Form.Item noStyle dependencies={['password2']}>
                {() => (
                    <Typography>
                        <p>
                            Only Update when <code>password2</code> updated:
                        </p>
                        {/* form.getFieldsValue()获取所有值的结果*/}
                        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                    </Typography>
                )}
            </Form.Item>
        </Form>
    );
}

export default Index;