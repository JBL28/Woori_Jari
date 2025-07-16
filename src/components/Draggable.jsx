import React from 'react';
import {useDraggable} from '@dnd-kit/core';

function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });

  const baseStyle = {
    margin: '0.25vw',
    backgroundColor:'transparent',
    display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    fontSize:'2vw',
    zIndex: '30',
    border: "1px solid #aaa",
    borderRadius: "8px",
    backgroundColor: 'silver',
  }
  
  // 아래의 스타일을 주지 않으면 드래그 시에 아무런 효과가 나타나지 않음.
  const transStyle = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const style = {
    ...baseStyle,
    ...transStyle
  }
  
  return (
    <div ref={setNodeRef} style={style} {...attributes}>
        {/* 드래그 핸들 전용 영역 */}
        <div {...listeners} style={{ cursor: 'grab', margin:'0', width:'1vw', height:'1vh'}}>
            <span style={{display:'block', textAlign:'center', verticalAlign:'center'}}>::</span> {/* 예: 드래그 핸들 표시 */}   
        </div>
      {props.children}
    </div>
  );
}

export default Draggable;