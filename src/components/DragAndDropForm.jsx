import { useContext } from 'react'
import NameCard from './NameCard'
import { Flex } from 'antd'
import { DndContext, DragOverlay } from '@dnd-kit/core'
import Droppable from './Droppable'
import Draggable from './Draggable'

const DragAndDropForm = () => {
    const dummyList=[
        {
            name: "김우리1",
            eye: true
        },
        {
            name: "나성실1",
            eye: false
        },
        {
            name: "박재능1",
            eye: false
        },
        {
            name: "이발전1",
            eye: true
        },
        {
            name: "김우리2",
            eye: true
        },
        {
            name: "나성실2",
            eye: false
        },
        {
            name: "박재능2",
            eye: false
        },
        {
            name: "이발전2",
            eye: true
        },
        {
            name: "김우리3",
            eye: true
        },
        {
            name: "나성실3",
            eye: false
        },
        {
            name: "박재능3",
            eye: false
        },
        {
            name: "이발전3",
            eye: true
        },
        {
            name: "김우리4",
            eye: true
        },
        {
            name: "나성실4",
            eye: false
        },
        {
            name: "박재능4",
            eye: false
        },
        {
            name: "이발전4",
            eye: true
        },
        {
            name: "김우리5",
            eye: true
        },
        {
            name: "나성실5",
            eye: false
        },
        {
            name: "박재능5",
            eye: false
        },
        {
            name: "이발전5",
            eye: true
        },{
            name: "김우리6",
            eye: true
        },
        {
            name: "나성실6",
            eye: false
        },
        {
            name: "박재능6",
            eye: false
        },
        {
            name: "이발전6",
            eye: true
        },
        {
            name: "김우리7",
            eye: true
        },
        {
            name: "나성실7",
            eye: false
        },
        {
            name: "박재능7",
            eye: false
        },
        {
            name: "이발전7",
            eye: true
        },
        {
            name: "김우리8",
            eye: true
        },
        {
            name: "나성실8",
            eye: false
        },
        {
            name: "박재능8",
            eye: false
        },
        {
            name: "이발전9",
            eye: true
        },
        {
            name: "김우리9",
            eye: true
        },
        {
            name: "나성실9",
            eye: false
        },
        {
            name: "박재능9",
            eye: false
        },
        {
            name: "이발전0",
            eye: true
        },
        {
            name: "김우리0",
            eye: true
        },
        {
            name: "나성실0",
            eye: false
        },
        {
            name: "박재능0",
            eye: false
        },
        {
            name: "이발전2",
            eye: true
        },
    ]

    const handleDragEnd = ({ active, over }) => {
        if (!over) return;

        const from = bottomList.some(p => p.name === active.id) ? '2' : '1';
        const to = over.id;

        if (from === to) return;

        const movingItem = from === '2'
            ? bottomList.find(p => p.name === active.id)
            : topList.find(p => p.name === active.id);

        if (!movingItem) return;

        if (from === '2') {
            setBottomList(prev => prev.filter(p => p.name !== active.id));
            setTopList(prev => [...prev, movingItem]);
        } else {
            setTopList(prev => prev.filter(p => p.name !== active.id));
            setBottomList(prev => [...prev, movingItem]);
        }
    };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative', overflow:'visible'}}>
        <DndContext onDragEnd={handleDragEnd}>
            <h2 style={{color:'white', fontSize: '2vw'}}>눈이 안좋은 사람을 위로 Drag&Drop 해주세요</h2><br/>
            <Droppable id={1}>
                <div style={{border:'dashed silver', minWidth:'40vw', minHeight:'30vh'}}></div>
            </Droppable>
            <h2 style={{color:'white', fontSize: '2vw'}}>입력된 이름</h2>
            <Droppable id={2}>
                <div style={{
                    border:'dashed silver', 
                    width:'51vw', 
                    maxHeight:'30vh', 
                    overflowY:'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap:'wrap',
                    }}>
                    {dummyList.map(person => 
                    <Draggable id = {person.name}>
                        {person.name}
                    </Draggable>
                    )}
                </div>
            </Droppable>
        </DndContext>
    </div>
  )
}

export default DragAndDropForm