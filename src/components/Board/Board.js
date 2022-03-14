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
import { MovePiece, IsTileEmpty } from "../../utils/HelperFunctions";

import {
  BoardContext,
  ActivePieceContext,
  CurrentPlayerContext,
} from "../../context/Context";

function Board({}) {
  const { board, setBoard } = useContext(BoardContext);
  const { activePiece, setActivePiece } = useContext(ActivePieceContext);
  const { currentPlayer, setCurrentPlayer } = useContext(CurrentPlayerContext);

  // I can get a piece and make it move to a specific locaton
  function handleClick(i, j) {
    setCurrentPiece(i, j);

    if (activePiece) {
      //TODO:restrict movement to enemy pieces only
      //TODO:target enemy tiles
      //TODO: if illegal move is attempted to occupied tile, the turn goes through
      if (MovePiece(i, j, activePiece, currentPlayer, board)) {
        console.log(i, j);
        flipPlayer();
      }

      setActivePiece(null);
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
    let owner;
    let piece = null;
    board.forEach((b) => {
      if (b.x === i && b.y === j) {
        piece = b.piece;
        owner = b.owner;
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
        <Tile x={i} y={j} owner={owner}>
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
  console.log(activePiece);
  return <div className="board">{tiles}</div>;
}

export default Board;
