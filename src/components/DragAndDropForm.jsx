import { useContext } from 'react'
import NameCard from './NameCard'
import { Flex } from 'antd'

const DragAndDropForm = () => {
    const dummyList=[
        {
            name: "김우리",
            eye: true
        },
        {
            name: "나성실",
            eye: false
        },
        {
            name: "박재능",
            eye: false
        },
        {
            name: "이발전",
            eye: true
        }
    ]

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2 style={{color:'white', fontSize: '2vw'}}>눈이 안좋은 사람을 위로 Drag&Drop 해주세요</h2><br/>
        <div style={{border:'dashed silver', minWidth:'40vw', minHeight:'30vh'}}></div>
        <h2 style={{color:'white', fontSize: '2vw'}}>입력된 이름</h2>
        <div style={{
            border:'dashed silver', 
            minWidth:'40vw', 
            minHeight:'30vh', 
            overflowY:'auto',
            display: 'flex',
            flexDirection: 'row'
            }}>
            {dummyList.map(person => 
                <NameCard
                name={person.name}
                eye={person.eye}
                key={person.name}/>
            )}

        </div>
    </div>
  )
}

export default DragAndDropForm