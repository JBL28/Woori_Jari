import { useContext } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Footer } = Layout;

const MyFooter = ({ onUpdate, onDelete }) => {
  return (
    <ul style={{margin: "0", padding: "0"}}>
        <Footer style={{ textAlign: 'center' }}>
            © 우리자리 2024 또는 Copyright 우리자리 2025 (All Rights Reserved) 
        </Footer>
    </ul>
  )
}

export default MyFooter