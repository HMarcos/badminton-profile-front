import { Layout, Button, Form, Input, Radio } from 'antd';

import Logo from './../../assets/images/badminton-icon.svg';
import './style.css';

const { Header, Content, Footer } = Layout;

export default function RegisterCategoryPage() {
  return (
    <Layout className='layout'>
      <Header id='header'>
        <div className='logo'>
          <img src={Logo} alt='badminton logo' />
          <p>Badminton Profile</p>
        </div>
      </Header>
      <Content id='content'>
        <Form
          id='form'
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout='horizontal'
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
            <Input />
          </Form.Item>
        </Form>
      </Content>
      <Footer id='footer'>Badminton Profile ©2022 </Footer>
    </Layout>
  );
}
