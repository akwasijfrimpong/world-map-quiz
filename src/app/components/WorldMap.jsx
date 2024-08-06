"use client";
import WorldMapSVG from "./WorldMapSvg";
import Timer from "./Timer";
import { useState, useCallback, useRef } from "react";

const ZoomableSvg = ({ src }) => {
  const [gameStarted, setGameStarted] = useState(false);
  function gameStartedFunction() {
    setGameStarted(true);
  }
  function gameEnded() {
    setGameStarted(false);
  }

  return (
    <div className="flex flex-col items-center pt-5">
      <Timer
        gameStartedFunction={gameStartedFunction}
        gameEndedFunction={gameEnded}
      />
      <div>
        <WorldMapSVG showInput={gameStarted} className="map" />
      </div>
    </div>
  );
};

export default ZoomableSvg;
