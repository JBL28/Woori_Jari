// MyHeader.jsx
import React, { useState } from 'react';
import { Layout } from 'antd';
import { createPortal } from 'react-dom';
import Modal from '../../ui/Modal';
import NameForm from './NameForm.jsx';


const { Header } = Layout;

const MyHeader = ({rowcol, onChageRowCol, list, onChangeList }) => {
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
                                rowcol = {rowcol}
                                onChangeRowCol = {(newRowCol) => {onChageRowCol(newRowCol);}}
                                list = {list}
                                onChangeList={(newNames) => {
                                    onChangeList(() => [...newNames]);
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
