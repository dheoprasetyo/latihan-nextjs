import { Form, Input, InputNumber, Button, Select, message } from 'antd';


export default function AntdForm() {
  
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 10,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
  const onFinish = (values) => {
    console.log(values);
  };
  
  function messageInsert(){
    message.success('message: Data Terkirim');
  } 

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['orang', 'name']}
        label="Nama"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['orang', 'email']}
        label="Email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['orang', 'age']}
        label="Umur"
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
            max: 150,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['orang', 'NIK']} label="NIK"
      rules={[
        {
          required: true,
        },
      ]}>
       <Input />
      </Form.Item>
      <Form.Item name={['orang', 'alamat']} label="Alamat">
        <Input.TextArea showCount maxLength={300}/>
      </Form.Item>
      <Form.Item name={['orang', 'posisi']} label="Posisi">
        <Select defaultValue="frontend" style={{ width: 120 }} onChange={handleChange}>
          <Option value="frontend">frontend</Option>
          <Option value="backend">backend</Option>
          <Option value="qa">qa</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={messageInsert} >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};