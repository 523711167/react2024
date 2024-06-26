import React from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";

/**
 *
 * @Author pxx
 * @DATA 2024/3/20 17:33
 */

const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};
function Index() {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={['user']}>
                <MyFormItemGroup prefix={['name']}>
                    <MyFormItem name="firstName" label="First Name">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="lastName" label="Last Name">
                        <Input />
                    </MyFormItem>
                </MyFormItemGroup>

                <MyFormItem name="age" label="Age">
                    <Input />
                </MyFormItem>
            </MyFormItemGroup>

            <FormItem label="密码" name="password">
                <Input addonBefore={"123"} />
            </FormItem>

            <FormItem label="密码" name={["password", "idCard"]}>
                <Input addonBefore={"123"} />
            </FormItem>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Index;