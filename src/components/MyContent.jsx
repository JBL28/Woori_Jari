import { useContext } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SeatArrangement from './SeatArrangement';

const { Content } = Layout;

const MyContent = ({list}) => {
  const data = [
  "민서",
  "지훈",
  "서연",
  "도윤",
  "하은",
  "준우",
  "예진",
  "시우",
  "수아",
  "현우",
];

  const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    console.log(list);
  
  return (
    <ul style={{margin:'0', padding:'0'}}>
        <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            margin: '30px',
            fontSize: '30px',
          }}
        >
        <p>{list}</p>
        <SeatArrangement data={data} rows={5} cols={2} />
        </div>
      </Content>
    </ul>
  )
}

export default MyContent