// App.jsx
import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import MyContent from './components/MyContent';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';

const { Header, Content, Footer } = Layout;

const App = () => {
    const [list, changeList] = useState([]); // ✅ 초기 빈 배열
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minWidth: '100vw', minHeight: '100vh' }}>
            <MyHeader list={list} onChangeList={changeList} />
            <MyContent list={list} />
            <MyFooter />
        </Layout>
    );
};

export default App;
