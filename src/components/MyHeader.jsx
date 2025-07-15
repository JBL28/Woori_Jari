// MyHeader.jsx
import React, { useState } from 'react';
import { Layout } from 'antd';
import { createPortal } from 'react-dom';
import Modal from '../../ui/Modal';
import NameForm from './NameForm.jsx';

const { Header } = Layout;

const MyHeader = ({list, onChangeList }) => {
    const [openModal, setOpenModal] = useState(true);

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
                                    onChangeList(() => [...newNames]); // ✅ 기존 리스트에 추가
                                }}
                                onClose={setOpenModal}
                            />
                        </Modal>,
                        document.getElementById('asideRoot')
                    )}
            </Header>
        </ul>
    );
};

export default MyHeader;
