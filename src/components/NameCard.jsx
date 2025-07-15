import { useContext } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Footer } = Layout;

const NameCard = ({ name, eye }) => {
    let icon;
    console.log(name)
    console.log(eye)
    if(eye === true)
        icon=' 👓'
    else
        icon=' 👀'
  return (
    <div style={{
        filter: `
            drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12)) 
            drop-shadow(0 3px 3px rgba(0, 0, 0, 0.14)) 
            drop-shadow(0 1px 8px rgba(0, 0, 0, 0.12)) 
            drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1))
        `,
        backgroundColor:'white',
        borderRadius:'10px',
        width: '10vw',
        height: '7vh',
        margin: '0.9vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <div style={{fontSize:'2vw'}}>{icon}{name}</div>
    </div>
  )
}

export default NameCard