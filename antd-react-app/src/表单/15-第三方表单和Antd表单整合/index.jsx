import React, {useState} from 'react';
import {Button, Form, Input, Select} from 'antd';

const {Option} = Select;

/**
 *
 * @Author pxx
 * @DATA 2023/12/28 13:40
 */
//value 是initialValues传递的初始值
//onChange 只可意会
const PriceInput = ({value = {}, onChange}) => {
    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState('rmb');
    const triggerChange = (changedValue) => {
        onChange?.({
            number,
            currency,
            ...value,
            ...changedValue,
        });
    };
    const onNumberChange = (e) => {
        debugger
        const newNumber = parseInt(e.target.value || '0', 10);
        if (Number.isNaN(number)) {
            return;
        }
        // if (!('number' in value)) {
            setNumber(newNumber);
        // }
        triggerChange({
            number: newNumber,
        });
    };
    const onCurrencyChange = (newCurrency) => {
        if (!('currency' in value)) {
            setCurrency(newCurrency);
        }
        triggerChange({
            currency: newCurrency,
        });
    };
    return (
        <span>
          <Input
              type="text"
              value={value.number || number}
              onChange={onNumberChange}
              style={{
                  width: 100,
              }}
          />
          <Select
              value={value.currency || currency}
              style={{
                  width: 80,
                  margin: '0 8px',
              }}
              onChange={onCurrencyChange}
          >
            <Option value="rmb">RMB</Option>
            <Option value="dollar">Dollar</Option>
          </Select>
    </span>
    );
};

function Index() {
    const onFinish = (values) => {
        console.log('Received values from form: ', values);
    };
    const checkPrice = (_, value) => {
        if (value.number > 0) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('Price must be greater than zero!'));
    };
    return (
        <Form
            name="customized_form_controls"
            layout="inline"
            onFinish={onFinish}
            // initialValues={{
            //     price: {
            //         number: 0,
            //         currency: 'rmb',
            //     },
            // }}
        >
            <Form.Item
                name="price"
                label="Price"
                rules={[
                    {
                        validator: checkPrice,
                    },
                ]}
            >
                <PriceInput/>
            </Form.Item>
            <Form.Item
                name="name"
                label="name"
            >
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Index;