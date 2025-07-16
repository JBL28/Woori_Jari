// 데이터를 받아서 랜덤으로 돌린 뒤 출력
// 좌석 잠금 시 좌석에 해당된 데이터도 잠금
// 해당 데이터 제외하고 셔플

import { useEffect, useState } from "react";
import SeatItem from "../../ui/SeatItem";

const SeatArrangement = ({ rows, cols, data }) => {
  // 잠금 상태 배열
  const [locked, setLocked] = useState(() => data?.map(() => false) || []);
    // 컴포넌트가 렌더링될때마다 shuffle이 실행되니깐
  // 초기 렌더링 할때만 data를 shuffle 한다.
  // data가 undefined거나 null 일 가능성이 있응께
  const [seats, setSeats] = useState(() => data || []);


  // 데이터를 받아서 셔플 후 seats 로 저장
  const shuffle = (arr, lockedArr) => {
    // 잠금안된 데이터만 추출
    const unlockedItems = arr.filter((_, i) => !lockedArr[i]);
    const shuffledUnlock = [...unlockedItems];
    // const array = [...arr];
    for (let i = shuffledUnlock.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // i까지의 범위 중에서 랜덤 인덱스 j 생성
      [shuffledUnlock[i], shuffledUnlock[j]] = [shuffledUnlock[j],shuffledUnlock[i],
      ]; // 구조 분해 할당 (i와 j의 자리 교환)
    }
    const result = [];
    let unlockedIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (lockedArr[i]) { // 해당 인덱스의 잠금이 true인 경우 원래 위치 그대로
        result.push(arr[i]); 
      } else { // 해당 인덱스의 잠금이 false인 경우 셔플된 배열에서 꺼냄
        result.push(shuffledUnlock[unlockedIndex]);
        unlockedIndex++;
      }
    }
    return result;
  };


  // 데이터가 바뀌면 lock, seats도 다시 셔플
useEffect(() => {
  const initLocked = data?.map(() => false) || [];
  setLocked(initLocked);
  setSeats(shuffle(data || [], initLocked));
}, [data]);


  // 잠금 후 셔플 실행하는 함수
  const shuffleSeats = () => {
    setSeats((seats) => shuffle(seats, locked));
  };


  const toggleLock = (index) => {
    setLocked((prev) => {
      const newLocked = [...prev];
      newLocked[index] = !newLocked[index];
      return newLocked;
    });
  };

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
          return (
            <SeatItem
              key={index}
              data={seatData || ''}
              locked={locked[index]}
              onClick={() => toggleLock(index)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div style={{ padding: "24px", textAlign: "center" }}>
      <h2>자리 배치도</h2>
      <button onClick={shuffleSeats}>셔플</button>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {renderSeats()}
      </div>
    </div>
  );
};

export default SeatArrangement;
