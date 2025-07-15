import { useContext } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Content } = Layout;

const MyContent = ({ onUpdate, onDelete }) => {

  const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  
  return (
    <ul style={{margin:'0', padding:'0'}}>
        <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            margin: '30px',
            fontSize: '30px',
          }}
        >

        </div>
      </Content>
    </ul>
  )
}

export default MyContent