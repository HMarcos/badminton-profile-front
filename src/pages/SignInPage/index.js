import { Button, Form, Input, Space, Typography, notification } from 'antd';

import './style.css';
import Logo from './../../assets/images/badminton-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../services/api';
import { useState, useContext } from 'react';
import TokenContext from '../../contexts/TokenContext';

const { Title, Text } = Typography;

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: ' O campo ${label} é obrigatório',
  string: {
    min: 'Deve-se ter ao menos 8 caracteres',
  },
  types: {
    email: 'Insira um e-mail válido',
  },
};

const openNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export default function SignInPage() {
  const { setToken } = useContext(TokenContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function onFinish(values) {
    setLoading(true);

    const signInData = { ...values };

    const promise = signIn(signInData);

    promise.then((response) => {
      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', JSON.stringify(token));
      navigate('/');
    });

    promise.catch((error) => {
      const { status, data } = error.response;
      openNotification('error', 'Erro no login', `Erro ${status}: ${data} `);
      setLoading(false);
    });
  }

  return (
    <div className='container-signIn'>
      <div className='content-signIn'>
        <Space direction='vertical' size='large' align='center'>
          <img className='logo' src={Logo} alt='badminton logo' />
          <Title level={1} id='title'>
            Badminton Profile
          </Title>
        </Space>
        <Form
          name='sign-up'
          layout='vertical'
          onFinish={onFinish}
          validateMessages={validateMessages}
          id='signIn'
          disabled={loading}
        >
          <Form.Item
            name='email'
            label='Email'
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input id='email' />
          </Form.Item>
          <Form.Item
            label='Senha'
            name='password'
            rules={[
              {
                required: true,
                min: 8,
              },
            ]}
          >
            <Input.Password id='password'/>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit' loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to='/sign-up'>
          <Text underline id='link'>
            Caso já não seja registrado, faça o cadastro aqui!
          </Text>
        </Link>
      </div>
    </div>
  );
}
