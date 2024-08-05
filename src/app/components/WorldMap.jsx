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
    setGameStartedFalse();
  }

  return (
    <div>
      <Timer gameStartedFunction={gameStartedFunction} />
      <div>
        <WorldMapSVG showInput={gameStarted} className="map" />
      </div>
    </div>
  );
};

export default ZoomableSvg;
