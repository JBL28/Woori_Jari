import React, { useState, useEffect } from 'react';

const NameForm = ({ rowcol, onChangeRowCol, list, onChangeList, onClose }) => {
    const [names, setNames] = useState(list.join(', '));
    const [row, setRow] = useState(rowcol?.[0] || 0);
    const [col, setCol] = useState(rowcol?.[1] || 0);

    // 모달이 열릴 때 초기화
    useEffect(() => {
        setNames(list.join(', '));
        setRow(rowcol?.[0] || 0);
        setCol(rowcol?.[1] || 0);
    }, [list, rowcol]);

    const handleSubmit = () => {
        const nameList = names
            .split(',')
            .map((name) => name.trim())
            .filter((name) => (name.length));

        if (!isNaN(row) && !isNaN(col)) {
            onChangeRowCol([row, col]);
        }

        if (nameList.length <= row*col){
            for(let i = 0; i<=(row*col-nameList.length - 1); i++){
                nameList.push(`빈자리 ${crypto.randomUUID()}`);
            }
        }
        

        if (nameList.length > 0) {
            onChangeList(nameList);
            onClose(false); // 모달 닫기
        }
    };

    return (
        <>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF' }}>행, 열, 이름을 입력해주세요</h3>

            <form style={{ margin: '0.5rem 0' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '1.25rem', color: 'white' }}>행</label>
                    <input
                        type="number"
                        value={row}
                        min={0}
                        onChange={(e) => setRow(Math.max(0, Number(e.target.value)))}
                        style={{ height: '2rem' }}
                    />

                    <label style={{ display: 'block', fontSize: '1.25rem', color: 'white' }}>열</label>
                    <input
                        type="number"
                        value={col}
                        min={0}
                        onChange={(e) => setCol(Math.max(0, Number(e.target.value)))}
                        style={{ height: '2rem' }}
                    />

                    <label htmlFor="names" style={{ display: 'block', fontSize: '1.25rem', color: 'white' }}>
                        이름 목록 (쉼표로 구분)
                    </label>
                    <textarea
                        id="names"
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
                    <button onClick={() => onClose(false)} type="button" style={{ fontSize: '1.25rem', color: 'white' }}>
                        취소
                    </button>
                    <button
                        onClick={handleSubmit}
                        type="button"
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
