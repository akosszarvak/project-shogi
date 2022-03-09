import React from "react";
import "./Tile.scss";

function Tile({ children }) {
  return <div className="tile">{children}</div>;
}

export default Tile;
