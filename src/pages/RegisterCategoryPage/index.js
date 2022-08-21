import { Layout, Button, Form, Input, Radio, notification, Typography } from 'antd';
import { useState } from 'react';

import Logo from './../../assets/images/badminton-icon.svg';
import './style.css';

const { Header, Content, Footer } = Layout;

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: ' O campo ${label} é obrigatório',
};

const openNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export default function RegisterCategoryPage() {
  const [loading, setLoading] = useState(false);
  return (
    <Layout className='layout'>
      <Header id='header'>
        <div className='logo'>
          <img src={Logo} alt='badminton logo' />
          <p>Badminton Profile</p>
        </div>
      </Header>
      <Content id='content-register-category'>
        <Title level={1} id='title-category'> Cadastrar categoria</Title>
        <Form
          name='form-category'
          id='form-category'
          layout='horizontal'
          disabled={loading}
          validateMessages={validateMessages}
        >
          <Form.Item name='category' label='Categoria' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label='Gênero' name='type' rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value='Masculino'> Masculino</Radio>
              <Radio value='Ferminino'> Feminino</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name='description' label='Descrição' rules={[{ required: true }]}>
            <Input.TextArea showCount maxLength={150} />
          </Form.Item>
          <Form.Item className='register-button'>
            <Button type='primary' htmlType='submit'>
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer id='footer'>Badminton Profile ©2022 </Footer>
    </Layout>
  );
}
