import { useContext } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header } = Layout;

const MyHeader = ({ onUpdate, onDelete }) => {
  return (
    <ul style={{margin: "0", padding: "0"}}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div >
                <h2 style={{color:"white"}}>제목입니다.</h2>
            </div>
        </Header>
    </ul>
  )
}

export default MyHeader