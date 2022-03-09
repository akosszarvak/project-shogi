import React, { useState } from "react";
import "./Board.scss";
import Tile from "../Tile/Tile";
import Knight from "../Pieces/Knight";
import Pawn from "../Pieces/Pawn";
import Rook from "../Pieces/Rook";
import Bishop from "../Pieces/Bishop";
import Silver from "../Pieces/Silver";
import Gold from "../Pieces/Gold";
import Lance from "../Pieces/Lance";
import King from "../Pieces/King";
import { InitialBoard } from "../../utils/InitialBoard";

function Board() {
  const [board, setBoard] = useState(InitialBoard);
  const [activePiece, setActivePiece] = useState(null);

  //render a tile and decide if it has a piece- has to be incide Board function because of useState hook
  function renderTile(i, j, board) {
    let piece = null;
    board.forEach((b) => {
      if (b.x === i && b.y === j) {
        piece = b.piece;

        switch (piece) {
          case "P":
            piece = <Pawn />;
            break;
          case "N":
            piece = <Knight />;
            break;
          case "B":
            piece = <Bishop />;
            break;
          case "R":
            piece = <Rook />;
            break;
          case "S":
            piece = <Silver />;
            break;
          case "G":
            piece = <Gold />;
            break;
          case "L":
            piece = <Lance />;
            break;
          case "K":
            piece = <King />;
            break;
        }
      }
    });

    return (
      <div
        key={`${i}${j}`}
        onClick={() => {
          setActivePiece(piece);
        }}
      >
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
