import React, { useContext, useState } from "react";
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
import { MovePiece } from "../../utils/MoveToXY";
import {
  BoardContext,
  ActivePieceContext,
  CurrentPlayerContext,
} from "../../context/Context";

function Board() {
  // const [board, setBoard] = useState(InitialBoard);
  const { board, setBoard } = useContext(BoardContext);
  const { activePiece, setActivePiece } = useContext(ActivePieceContext);
  const { currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext);

  // I can get a piece and make it move to a specific locaton
  //TODO: get it into seperate clicks and move the highlighted piece to the second click's location
  function handleClick(i, j) {
    setCurrentPiece(i, j);

    if (activePiece) {
      //TODO:restrict movement to enemy pieces only
      //TODO:target enemy tiles
      //TODO:target empty tiles
      MovePiece(i, j, activePiece, currentPlayer);
      setActivePiece(null);
      flipPlayer();
    }
  }

  //sets the current piece state to the targeted tile's child
  function setCurrentPiece(i, j) {
    board.map((e) => {
      if (e.x === i && e.y === j && currentPlayer === e.owner) {
        setActivePiece(e);
      }
    });
  }

  function flipPlayer() {
    if (currentPlayer === 0) {
      setCurrentPlayer(1);
      return;
    }
    if (currentPlayer === 1) {
      setCurrentPlayer(0);
      return;
    }
  }
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
          default:
            piece = null;
            break;
        }
      }
    });

    return (
      <div key={`${i}, ${j}`} onClick={() => handleClick(i, j)}>
        <Tile x={i} y={j}>
          {piece}
        </Tile>
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
