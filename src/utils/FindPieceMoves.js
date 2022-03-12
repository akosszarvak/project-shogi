const findPawnMoves = (x, y, activePiece) => {
  const validMoves = [];
  if (activePiece.owner === 0 && activePiece.x === x++) {
    validMoves.push([x, y]);
  } else if (activePiece.owner === 1 && activePiece.x === x--) {
    validMoves.push([x, y]);
  }
  return validMoves;
};

function findPieceMoves(activePiece, x, y) {
  let pieceMoves;
  let pieceType = activePiece.piece;
  switch (pieceType) {
    case "P":
      pieceMoves = findPawnMoves(x, y, activePiece);
      break;
    case "N":
      pieceMoves = findKingMoves(x, y, activePiece);
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
