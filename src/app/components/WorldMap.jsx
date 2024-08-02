"use client";
import WorldMapSVG from "./WorldMapSvg";
import worldMapSvg from "./WorldMapSvg";
import { useState, useCallback, useRef } from "react";

const ZoomableSvg = ({ src }) => {
  return (
    <div>
      <WorldMapSVG className="map" />
    </div>
  );
};

export default ZoomableSvg;
