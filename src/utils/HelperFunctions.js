//movement logic
export function MovePiece(x, y, activePiece, currentPlayer, board) {
  if (activePiece && activePiece.owner === currentPlayer) {
    if (IsTileEmpty(x, y, board)) {
      activePiece.x = x;
      activePiece.y = y;
      return true;
    } else {
      let piece = GetPiece(x, y, board);
      if (piece) {
        if (piece.owner != currentPlayer) {
          // removes the piece from board and excecutes the move
          //TODO: move the movement into own function out of movement logic if it becomes too redundant
          RemovePiece(piece, board);
          activePiece.x = x;
          activePiece.y = y;
          return true;
        }
      }
    }
  } else if ((activePiece.x === x, activePiece.y === y)) {
    return;
  } else {
    return false;
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
