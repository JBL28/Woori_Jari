import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MyContent from './components/MyContent';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style = {{minWidth: "100vw", minHeight: "100vh"}}>
      <MyHeader />
      <MyContent />
      <MyFooter />
    </Layout>
  );
};
export default App;