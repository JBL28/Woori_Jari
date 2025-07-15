// 좌석 하나를 버튼 형태로 출력
// 사용자가 클릭할 수 있게 하고
// props로 받은 데이터에 따라 좌석의 데이터를 변경가능(숫자나 이름 등으로)
// onclick으로 드래그나 자리 고정할 수 있도록
const SeatItem = ({ data, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "80px",
        height: "60px",
        backgroundColor: "blue",
        border: "1px solid #aaa",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {data}
    </button>
  );
};

export default SeatItem;
