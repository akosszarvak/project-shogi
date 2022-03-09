import React, { useState } from "react";
import "./Board.scss";
import Tile from "../Tile/Tile";
import Knight from "../Pieces/Knight";
import { InitialBoard } from "../../utils/InitialBoard";

function Board() {
  const [board, setBoard] = useState(InitialBoard);
  const [activePiece, setActivePiece] = useState(null);

  //render a tile and decide if it has a piece- has to be incide Board function because of useState hook
  //TODO: create a switch case to determine the piece
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
      <div onClick={() => setActivePiece(piece)}>
        <Tile>{piece}</Tile>
      </div>
    );
  }

  //creates the Tiles array which will be displayed
  const tiles = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      tiles.push(renderTile(i, j, board));
    }
  }
  return <div className="board">{tiles}</div>;
}

export default Board;
