// MyHeader.jsx
import React, { useState } from 'react';
import { Layout } from 'antd';
import { createPortal } from 'react-dom';
import Modal from '../../ui/Modal';
import NameForm from './NameForm.jsx';
import DragAndDropForm from './DragAndDropForm';

const { Header } = Layout;

const MyHeader = ({list, onChangeList }) => {
    const [openModal, setOpenModal] = useState(true);
    const [openSecondModal, open] = useState(false);

    return (
        <ul style={{ margin: '0', padding: '0' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ color: 'white' }}>우리자리.</h2>
                <button onClick={() => setOpenModal(true)} style={{ marginLeft: '20px' }}>
                    자리 배치 인원 입력하기
                </button>
                {openModal &&
                    createPortal(
                        <Modal onClose={() => setOpenModal(false)}>
                            <NameForm
                                list = {list}
                                onChangeList={(newNames) => {
                                    onChangeList(() => [...newNames]); //npm ✅ 기존 리스트에 추가
                                }}
                                onClose={setOpenModal}
                            />
                        </Modal>,
                        document.getElementById('asideRoot')
                    )}
                <button onClick={() => open(true)} style={{marginLeft: '20px'}}>-테스트용- 모달열기</button>
                {openSecondModal &&
                    createPortal(
                        <Modal onClose={() => open(false)}>
                            <DragAndDropForm />
                        </Modal>,
                        document.getElementById('asideRoot')
                    )}
            </Header>
        </ul>
    );
};

export default MyHeader;
