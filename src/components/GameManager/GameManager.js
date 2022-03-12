import React, { useState } from "react";
import "./GameManager.scss";
import Board from "../Board/Board";
import {
  BoardContext,
  ActivePieceContext,
  CurrentPlayerContext,
} from "../../context/Context";
import { InitialBoard } from "../../utils/InitialBoard";

function GameManager() {
  const [board, setBoard] = useState(InitialBoard);
  const [activePiece, setActivePiece] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      <ActivePieceContext.Provider value={{ activePiece, setActivePiece }}>
        <CurrentPlayerContext.Provider
          value={{ currentPlayer, setCurrentPlayer }}
        >
          <Board />;
        </CurrentPlayerContext.Provider>
      </ActivePieceContext.Provider>
    </BoardContext.Provider>
  );
}

export default GameManager;
