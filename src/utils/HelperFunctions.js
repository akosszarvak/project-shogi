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
          RemovePiece(piece);
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

function RemovePiece(piece, board) {
  console.log("remove", piece);
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
