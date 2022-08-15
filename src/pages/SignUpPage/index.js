import { Button, Form, Input, Space, Typography, notification } from 'antd';

import './style.css';
import Logo from './../../assets/images/badminton-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../services/api';
import { useState } from 'react';

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

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function onFinish(values) {
    setLoading(true);

    const signUpData = { ...values };
    const { password, passwordConfirmation } = signUpData;

    if (!validPassword(password, passwordConfirmation)) {
      return;
    }

    const promise = signUp(signUpData);

    promise.then((response) => {
      navigate('/sign-in');
    });

    promise.catch((error) => {
      const { status, data } = error.response;
      openNotification('error', 'Erro no cadastro', `Erro ${status}: ${data} `);
      setLoading(false);
    });
  }

  function validPassword(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      openNotification('error', 'Senha Incorreta', 'A senha e confirmação de senha não correspondem');
      setLoading(false);
      return false;
    }
    return true;
  }

  return (
    <div className='container'>
      <div className='content'>
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
          id='signUp'
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
            <Input id='email'/>
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
            <Input.Password id='password' />
          </Form.Item>
          <Form.Item
            label='Confirme a senha'
            name='passwordConfirmation'
            rules={[
              {
                required: true,
                min: 8,
              },
            ]}
          >
            <Input.Password id='passwordConfirmation' />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit' loading={loading}>
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
        <Link to='/sign-in'>
          <Text underline id='link'>
            Caso já seja cadastrado, faça o login aqui!
          </Text>
        </Link>
      </div>
    </div>
  );
}
