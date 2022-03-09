import React from "react";
import Tile from "../Tile/Tile";
import Knight from "../Pieces/Knight";
function Board() {
  return (
    <div>
      <Tile>
        <Knight></Knight>
      </Tile>
    </div>
  );
}

export default Board;
