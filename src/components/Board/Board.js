import React, { useState } from "react";
import "./Board.scss";
import Tile from "../Tile/Tile";
import Knight from "../Pieces/Knight";

let initialBoard = [];
initialBoard.push({ piece: "n", x: 0, y: 0 });
initialBoard.push({ piece: "", x: 0, y: 1 });
initialBoard.push({ piece: "n", x: 8, y: 1 });
function Board() {
  const [board, setBoard] = useState(initialBoard);

  console.log(board[2].x, board[2].y);

  function renderTile(i, j, board) {
    let piece = null;
    board.forEach((b) => {
      if (b.x === i && b.y === j) {
        if (b.piece === "n") {
          piece = <Knight />;
        } else {
          piece = null;
        }
      }
    });

    return (
      <div>
        <Tile>{piece}</Tile>
      </div>
    );
  }

  const tiles = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      tiles.push(renderTile(i, j, board));
    }
  }
  return <div className="board">{tiles}</div>;
}

export default Board;
