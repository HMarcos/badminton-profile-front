import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import Logo from './../../assets/images/badminton-icon.svg';
import './style.css';

const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Categorias', 'categories', null, [
    getItem('Cadastrar Categoria', '/register/category'),
    getItem('Visualizar Categorias', '/categories'),
  ]),
  getItem('Atletas', 'athlets', null, [
    getItem('Cadastrar Atleta ', '/register/athlete'),
    getItem('Visualizar Atletas', '/athlets'),
  ]),
  getItem('Árbitros', 'umpires', null, [
    getItem('Cadastrar Árbitro', '/register/umpire'),
    getItem('Visualizar Árbitro', '/umpires'),
  ]),
];

export default function HomePage() {
  const navigate = useNavigate();

  function onClick(e) {
    const page = e.key;
    navigate(page);
  }

  return (
    <Layout className='layout'>
      <Header id='header'>
        <div className='logo'>
          <img src={Logo} alt='badminton logo' />
          <p>Badminton Profile</p>
        </div>
      </Header>
      <Content id='content'>
        <Menu
          onClick={onClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['categories', 'athlets', 'umpires']}
          mode='inline'
          items={items}
          id='menu'
        ></Menu>
      </Content>
      <Footer id='footer'>Badminton Profile ©2022 </Footer>
    </Layout>
  );
}
