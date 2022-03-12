import React from "react";
import "./Tile.scss";

function Tile({ children, owner }) {
  console.log(owner);
  return (
    <div className={`tile ${owner === 0 ? "player2" : ""}`}>{children}</div>
  );
}

export default Tile;
