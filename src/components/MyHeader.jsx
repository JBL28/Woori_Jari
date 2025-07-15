import { useContext } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { createPortal } from 'react-dom';
import { useState } from 'react'
import Modal from '../../ui/Modal';
import DragAndDropForm from './DragAndDropForm';

const { Header } = Layout;

const MyHeader = ({ onUpdate, onDelete }) => {
  const [openModal, open] = useState(false);


  return (
    <ul style={{margin: "0", padding: "0"}}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div >
                <h2 style={{color:"white"}}>우리자리.</h2>
            </div>
            <button onClick={() => open(true)} style={{marginLeft: '20px'}}>-테스트용- 모달열기</button>
            {openModal &&
              createPortal(
                <Modal onClose={() => open(false)}>
                  <DragAndDropForm />
                </Modal>,
                document.getElementById('asideRoot')
            )}
        </Header>
    </ul>
  )
}

export default MyHeader