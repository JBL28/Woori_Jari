import { useEffect, useState } from "react";
import SeatItem from "../../ui/SeatItem";

const SeatArrangement = ({ rows, cols, data }) => {
  // 데이터를 받아서 셔플 후 seats 로 저장
  const shuffle = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // i까지의 범위 중에서 랜덤 인덱스 j 생성
      [array[i], array[j]] = [array[j], array[i]]; // 구조 분해 할당 (i와 j의 자리 교환)
    }
    return array;
  };

  // 컴포넌트가 렌더링될때마다 shuffle이 실행되니깐
  // 초기 렌더링 할때만 data를 shuffle 한다.
  // data가 undefined거나 null 일 가능성이 있응께
  const [seats, setSeats] = useState(() => shuffle(data || []));

  // 데이터가 바뀌면 seats도 다시 셔플
  useEffect(() => {
    setSeats(shuffle(data || []));
  }, [data]);

  const renderSeats = () => {
    const totalSeats = rows * cols;

    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${rows}, 80px)`,
          gridTemplateColumns: `repeat(${cols}, 80px)`,
          gap: "5px",
          justifyContent: "center",
        }}
      >
        {/* 길이가 totalSeats인 배열을 만듦 */}
        {Array.from({ length: totalSeats }).map((_, index) => {
          const seatData = seats[index]; // 데이터 있으면 넣고 없으면 빈 셀
          // 데이터가 있으면 해당 데이터를 전달
          // 데이터가 없으면 빈 배열 전달
          return seatData ? (
            <SeatItem
              key={index}
              data={seatData}
              onClick={(e) => console.log(`${seatData} clicked`)}
            />
          ) : (
            <SeatItem
              key={index}
              data={""}
              onClick={(e) => console.log(`${seatData} clicked`)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div style={{ padding: "24px", textAlign: "center" }}>
      <h2>자리 배치도</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {renderSeats()}
      </div>
    </div>
  );
};

export default SeatArrangement;
