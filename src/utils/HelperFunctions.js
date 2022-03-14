import { FindPieceMoves } from "./FindPieceMoves";

//movement logic
export function MovePiece(x, y, activePiece, currentPlayer, board) {
  let targetTile = [x, y];
  let legalMoves = [];

  if (activePiece && activePiece.owner === currentPlayer) {
    legalMoves = FindPieceMoves(activePiece, x, y, board);

    //checks if the target tile (the one you click) is included in the array of the possible moves of the piece you selected, and if yes, it lets you move to that piece
    if (MovesInclude(targetTile, legalMoves)) {
      if (IsTileEmpty(x, y, board)) {
        activePiece.x = x;
        activePiece.y = y;
        return true;
      } else {
        let piece = GetPiece(x, y, board);
        if (piece) {
          if (piece.owner !== currentPlayer) {
            // removes the piece from board and excecutes the move
            //TODO: move the movement into own function out of movement logic if it becomes too redundant
            RemovePiece(piece, board);
            activePiece.x = x;
            activePiece.y = y;
            return true;
          }
        }
      }
    }
  } else {
    return false;
  }
}

export function MovesInclude(targetTile, legalMoves) {
  for (let i = 0; i < legalMoves.length; i++) {
    if (
      legalMoves[i][0] === targetTile[0] &&
      legalMoves[i][1] === targetTile[1]
    ) {
      return true;
    }
  }
}

//returns the piece that occupies the target tile
export function GetPiece(x, y, board) {
  let piece = null;
  board.map((e) => {
    if (e.x === x && e.y === y) {
      piece = e;
    }
  });
  return piece;
}

//removes piece from board array
//TODO: push it into fallen pieces array ?
function RemovePiece(piece, board) {
  let removeIndex;

  for (let i = 0; i < board.length; i++) {
    if (piece.x === board[i].x && piece.y === board[i].y) {
      removeIndex = i;
      board.splice(removeIndex, 1);
    }
  }
}
//returns true if a tile is empty
export function IsTileEmpty(x, y, board) {
  let isEmpty = true;
  board.map((e) => {
    if (e.x === x && e.y === y) {
      isEmpty = false;
    }
  });

  return isEmpty;
}
