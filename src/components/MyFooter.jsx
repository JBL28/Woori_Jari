import { useContext } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Footer } = Layout;

const MyFooter = ({ onUpdate, onDelete }) => {
  return (
    <ul style={{margin: "0", padding: "0"}}>
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    </ul>
  )
}

export default MyFooter