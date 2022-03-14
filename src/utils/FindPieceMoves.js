export const findPawnMoves = (x, y, activePiece) => {
  let validMoves = [];
  let playerOneMoves = [[activePiece.x - 1, activePiece.y]];
  let playerTwoMoves = [[activePiece.x + 1, activePiece.y]];

  if (activePiece.owner === 1) {
    validMoves = playerOneMoves;
  } else {
    validMoves = playerTwoMoves;
  }
  return validMoves;
};

const findKingMoves = () => {};

export function findPieceMoves(activePiece, x, y) {
  let pieceMoves = [0, 0];
  let pieceType = activePiece.piece;
  switch (pieceType) {
    case "P":
      pieceMoves = findPawnMoves(x, y, activePiece);

      return pieceMoves;
      break;
    case "N":
      pieceMoves = findKingMoves(x, y, activePiece);
      break;

    default:
      pieceMoves = ["im here"];
      break;
  }
}
