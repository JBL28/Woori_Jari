// SeatArrangement.js
import { useEffect, useState } from "react";
import SeatItem from "../../ui/SeatItem";
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  rectSwappingStrategy,
  arraySwap
} from "@dnd-kit/sortable";
import Droppable from './Droppable';
import SortableSeatItem from "./Sortable";

const SeatArrangement = ({ rows, cols, data }) => {
  const [locked, setLocked] = useState(() => data?.map(() => false) || []);
  const [seats, setSeats] = useState(() => data || []);

  const shuffle = (arr, lockedArr) => {
    const unlockedItems = arr.filter((_, i) => !lockedArr[i]);
    const shuffledUnlock = [...unlockedItems];
    for (let i = shuffledUnlock.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledUnlock[i], shuffledUnlock[j]] = [shuffledUnlock[j], shuffledUnlock[i]];
    }
    const result = [];
    let unlockedIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      result.push(lockedArr[i] ? arr[i] : shuffledUnlock[unlockedIndex++]);
    }
    return result;
  };

  useEffect(() => {
    const initLocked = data?.map(() => false) || [];
    setLocked(initLocked);
    setSeats(shuffle(data || [], initLocked));
  }, [data]);

  const shuffleSeats = () => {
    setSeats(seats => shuffle(seats, locked));
  };

  const toggleLock = (index) => {
    setLocked(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const renderSeats = () => {
    const totalSeats = rows * cols;

    return (
      <DndContext
        onDragEnd={({ active, over }) => {
          if (!over || active.id === over.id) return;
          const oldIndex = seats.indexOf(active.id);
          const newIndex = seats.indexOf(over.id);
          if (oldIndex !== -1 && newIndex !== -1) {
            setSeats((items) => arraySwap(items, oldIndex, newIndex));
          }
        }}
      >
        <Droppable>
          <div
            style={{
              display: "grid",
              gridTemplateRows: `repeat(${rows}, 80px)`,
              gridTemplateColumns: `repeat(${cols}, 80px)`,
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <SortableContext
              items={seats.map((item, index) => item || `empty-${index}`)}
              // items={seats.map((item, index) => item)}
              strategy={rectSwappingStrategy}
              reorderItems={arraySwap}
              getNewIndex={({ id, items, activeIndex, overIndex }) =>
                arraySwap(items, activeIndex, overIndex).indexOf(id)
              }
            >
              {Array.from({ length: totalSeats }).map((_, index) => {
                const seatData = seats[index];
                return (
                  <SortableSeatItem
                    key={index}
                    id={seatData || `empty-${index}`}
                    data={seatData || ''}
                    locked={locked[index]}
                    onClick={() => toggleLock(index)}
                  />
                );
              })}
            </SortableContext>
          </div>
        </Droppable>
        <div>아무것도 나오지 않을 시 좌측 상단 버튼에서 이름을 먼저 입력해주세요.</div>
      </DndContext>
    );
  };

  return (
    <div style={{ padding: 0, margin: 0, textAlign: "center" }}>
      <h2 style={{ margin: 0 }}>자리 배치도</h2>
      <button
        onClick={shuffleSeats}
        style={{
          margin: '2vh',
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#6C63FF',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease',
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        🎲 셔플!
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: "5vw" }}>
        {renderSeats()}
      </div>
    </div>
  );
};

export default SeatArrangement;