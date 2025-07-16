import { useState } from "react";

const SeatItem = ({ data, onClick, locked }) => {


  return (
    <button
      onClick={onClick}
      style={{
        width: "80px",
        height: "60px",
        backgroundColor: locked ? "gray" : "blue",
        border: "1px solid #aaa",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        position: "relative",
        color: "white",
        overflow: "hidden",
      }}
    >
      {data}
      {locked && (
        <>
          {/* 대각선1 (/ 방향) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "120%",
              height: "2px",
              backgroundColor: "white",
              transform: "translate(-50%, -50%) rotate(45deg)",
              transformOrigin: "center",
              pointerEvents: "none", // 클릭 방해 안 하도록
            }}
          />
          {/* 대각선2 (\ 방향) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "120%",
              height: "2px",
              backgroundColor: "white",
              transform: "translate(-50%, -50%) rotate(-45deg)",
              transformOrigin: "center",
              pointerEvents: "none",
            }}
          />
        </>
      )}
    </button>
  );
};

export default SeatItem;
