// NameForm.jsx
import React, { useState } from 'react';

const NameForm = ({ list, onChangeList, onClose }) => {
    const [names, setNames] = useState(list);

    const handleSubmit = () => {
        const nameList = names
            .split(',')
            .map((name) => name.trim())
            .filter((name) => name.length > 0);

        if (nameList.length > 0) {
            onChangeList(nameList);         // 상위(App)로 전달
            setNames('');            // 입력 초기화
            onClose(false);          // 모달 닫기
        }
    };

    return (
        <>
            <h3 style={{ fontSize: '1.75rem', color: '#fecaca' }}>인원 이름</h3>

            <form style={{ margin: '0.5rem 0' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ marginBottom: '1rem' }}>
                    <label
                        htmlFor='names'
                        style={{
                            display: 'block',
                            marginBottom: '0.5rem',
                            fontSize: '1.25rem',
                            color: 'white',
                        }}
                    >
                        이름 목록 (쉼표로 구분)
                    </label>
                    <textarea
                        id='names'
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        rows={6}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: '1px solid #ccc',
                            borderRadius: '0.25rem',
                            fontSize: '1rem',
                        }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button onClick={() => onClose(false)} type='button' style={{ fontSize: '1.25rem', color: 'white' }}>
                        취소
                    </button>
                    <button
                        onClick={handleSubmit}
                        type='button'
                        style={{
                            fontSize: '1.25rem',
                            padding: '0.75rem 1.5rem',
                            color: '#fecaca',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        설정
                    </button>
                </div>
            </form>
        </>
    );
};

export default NameForm;
