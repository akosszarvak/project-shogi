export function MovePiece(x, y, activePiece, currentPlayer) {
  if (activePiece && activePiece.owner === currentPlayer) {
    activePiece.x = x;
    activePiece.y = y;
    // FlipCurrentPlayer(currentPlayer);
  } else if ((activePiece.x === x, activePiece.y === y)) {
    // set active piece to null
    return;
  }
}
export function RemoveFromBoard() {}
export function GetPosition() {}

//might be redundant
export function canMove(activePiece, currentPlayer) {
  if (activePiece === null) {
    return false;
  } else if (activePiece.owner === currentPlayer) {
    return true;
  } else {
    return false;
  }
}
