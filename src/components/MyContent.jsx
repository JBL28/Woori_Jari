import { Layout } from 'antd';
import SeatArrangement from './SeatArrangement';

const { Content } = Layout;

const MyContent = ({ rowcol, list }) => {
  const data = list;
  const rows = rowcol?.[0] ?? 0;
  const cols = rowcol?.[1] ?? 0;

  return (
    <div
      style={{
        margin: '0',
        padding: '0',
        background: 'linear-gradient(135deg, #fdfcfb, #e2d1c3)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Content style={{ width: '100%', maxWidth: '1000px', padding: '24px' }}>
        <div
          style={{
            background: '#ffffffcc',
            backdropFilter: 'blur(10px)',
            borderRadius: '2rem',
            padding: '40px 32px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '24px',
              color: '#333',
              letterSpacing: '-0.5px',
            }}
          >
            ✨ 오늘의 랜덤 자리 배치 ✨
          </h2>

          <SeatArrangement data={data} rows={rows} cols={cols} />
        </div>
      </Content>
    </div>
  );
};

export default MyContent;
