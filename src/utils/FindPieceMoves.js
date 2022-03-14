import { IsTileEmpty } from "./HelperFunctions";

export function FindPieceMoves(activePiece, x, y, board) {
  let pieceMoves = [];
  let pieceType = activePiece.piece;
  switch (pieceType) {
    case "P":
      pieceMoves = findPawnMoves(x, y, activePiece);

      return pieceMoves;

    case "K":
      pieceMoves = findKingMoves(x, y, activePiece);
      return pieceMoves;

    case "G":
      pieceMoves = findGoldMoves(x, y, activePiece);
      return pieceMoves;

    case "S":
      pieceMoves = findSilverMoves(x, y, activePiece);
      return pieceMoves;

    case "N":
      pieceMoves = findKnightMoves(x, y, activePiece);
      return pieceMoves;

    case "L":
      pieceMoves = findLanceMoves(x, y, activePiece, board);
      return pieceMoves;

    case "R":
      pieceMoves = findRookMoves(x, y, activePiece, board);

      return pieceMoves;

    case "B":
      pieceMoves = findBishopMoves(x, y, activePiece, board);

      return pieceMoves;
    default:
      pieceMoves = [];
      break;
  }
}

const findPawnMoves = (x, y, activePiece) => {
  let validMoves = [];
  const playerOneMoves = [[activePiece.x - 1, activePiece.y]];
  const playerTwoMoves = [[activePiece.x + 1, activePiece.y]];

  if (activePiece.owner === 1) {
    validMoves = playerOneMoves;
  } else {
    validMoves = playerTwoMoves;
  }
  return validMoves;
};

const findKingMoves = (x, y, activePiece) => {
  let validMoves = [
    [activePiece.x - 1, activePiece.y], //up
    [activePiece.x + 1, activePiece.y], //down
    [activePiece.x, activePiece.y + 1], //right
    [activePiece.x, activePiece.y - 1], // left
    [activePiece.x + 1, activePiece.y - 1], //up and left
    [activePiece.x + 1, activePiece.y + 1], //up and right
    [activePiece.x - 1, activePiece.y - 1], // left and up
    [activePiece.x - 1, activePiece.y + 1], //right and up
  ];
  return validMoves;
};

const findGoldMoves = (x, y, activePiece) => {
  let validMoves = [];
  const playerOneMoves = [
    [activePiece.x - 1, activePiece.y], //up
    [activePiece.x + 1, activePiece.y], //down
    [activePiece.x, activePiece.y + 1], //right
    [activePiece.x, activePiece.y - 1], // left
    [activePiece.x - 1, activePiece.y - 1], // left and up
    [activePiece.x - 1, activePiece.y + 1], //right and up
  ];

  const playerTwoMoves = [
    [activePiece.x - 1, activePiece.y], //up
    [activePiece.x + 1, activePiece.y], //down
    [activePiece.x, activePiece.y + 1], //right
    [activePiece.x, activePiece.y - 1], // left
    [activePiece.x + 1, activePiece.y - 1], //up and left
    [activePiece.x + 1, activePiece.y + 1], //up and right
  ];

  if (activePiece.owner === 1) {
    validMoves = playerOneMoves;
  } else {
    validMoves = playerTwoMoves;
  }
  return validMoves;
};

const findSilverMoves = (x, y, activePiece) => {
  let validMoves = [];
  const playerOneMoves = [
    [activePiece.x - 1, activePiece.y], //up
    // [activePiece.x + 1, activePiece.y], //down
    [activePiece.x, activePiece.y + 1], //right
    [activePiece.x, activePiece.y - 1], // left
    [activePiece.x - 1, activePiece.y - 1], // left and up
    [activePiece.x - 1, activePiece.y + 1], //right and up

    [activePiece.x + 1, activePiece.y - 1], //down and left
    [activePiece.x + 1, activePiece.y + 1], //down and right
  ];

  const playerTwoMoves = [
    // [activePiece.x - 1, activePiece.y], //up
    [activePiece.x + 1, activePiece.y], //down
    [activePiece.x, activePiece.y + 1], //right
    [activePiece.x, activePiece.y - 1], // left
    [activePiece.x + 1, activePiece.y - 1], //up and left
    [activePiece.x + 1, activePiece.y + 1], //up and right

    [activePiece.x - 1, activePiece.y - 1], // left and up
    [activePiece.x - 1, activePiece.y + 1], //right and up
  ];

  if (activePiece.owner === 1) {
    validMoves = playerOneMoves;
  } else {
    validMoves = playerTwoMoves;
  }
  return validMoves;
};

const findKnightMoves = (x, y, activePiece) => {
  let validMoves = [];
  const playerOneMoves = [
    [activePiece.x - 2, activePiece.y - 1], // left and up
    [activePiece.x - 2, activePiece.y + 1], //right and up
  ];

  const playerTwoMoves = [
    [activePiece.x + 2, activePiece.y - 1], //up and left
    [activePiece.x + 2, activePiece.y + 1], //up and right
  ];

  if (activePiece.owner === 1) {
    validMoves = playerOneMoves;
  } else {
    validMoves = playerTwoMoves;
  }
  return validMoves;
};

const findLanceMoves = (x, y, activePiece, board) => {
  let validMoves = [];
  let playerOneMoves = [];
  let playerTwoMoves = [];

  if (activePiece.owner === 1) {
    for (let i = activePiece.x - 1; i >= 0; i--) {
      playerOneMoves.push([i, activePiece.y]);
      if (!IsTileEmpty(i, y, board)) {
        // playerOneMoves.push([i, activePiece.y]);
        break;
      }
    }
    validMoves = playerOneMoves;
  } else {
    for (let i = activePiece.x + 1; i <= 8; i++) {
      playerTwoMoves.push([i, activePiece.y]);
      if (!IsTileEmpty(i, y, board)) {
        // playerTwoMoves.push([i, activePiece.y]);
        break;
      }
    }
    validMoves = playerTwoMoves;
  }
  return validMoves;
};

const findRookMoves = (x, y, activePiece, board) => {
  let validMoves = [];

  //moves up on board
  if (activePiece.x > x && activePiece.y === y) {
    for (let i = activePiece.x - 1; i >= 0; i--) {
      validMoves.push([i, activePiece.y]);
      if (!IsTileEmpty(i, y, board)) {
        break;
      }
    }
  }
  //moves down on board
  else if (activePiece.x < x && activePiece.y === y) {
    for (let i = activePiece.x + 1; i <= 8; i++) {
      validMoves.push([i, activePiece.y]);
      if (!IsTileEmpty(i, y, board)) {
        break;
      }
    }
  }
  //moves right
  else if (activePiece.y < y && activePiece.x === x) {
    for (let i = activePiece.y + 1; i <= 8; i++) {
      validMoves.push([activePiece.x, i]);
      if (!IsTileEmpty(x, i, board)) {
        break;
      }
    }
  } //moves left
  else if (activePiece.y > y && activePiece.x === x) {
    for (let i = activePiece.y - 1; i >= 0; i--) {
      validMoves.push([activePiece.x, i]);
      if (!IsTileEmpty(x, i, board)) {
        break;
      }
    }
  }

  console.log(validMoves);
  return validMoves;
};

const findBishopMoves = (x, y, activePiece, board) => {
  let validMoves = [];
  //move on left and up diagonal
  if (activePiece.x > x && activePiece.y > y) {
    let startingPos = activePiece.x;
    for (let j = activePiece.y - 1; j >= 0; j--) {
      startingPos--;
      validMoves.push([startingPos, j]);
      if (!IsTileEmpty(startingPos, j, board)) {
        break;
      }
    }
  }
  //move left and downwards diagonal
  else if (activePiece.x < x && activePiece.y > y) {
    let startingPos = activePiece.x;
    for (let j = activePiece.y - 1; j >= 0; j--) {
      startingPos++;

      validMoves.push([startingPos, j]);
      if (!IsTileEmpty(startingPos, j, board)) {
        break;
      }
    }
  }

  //mvoes right and upwards
  else if (activePiece.x > x && activePiece.y < y) {
    let startingPos = activePiece.x;
    for (let j = activePiece.y + 1; j <= 8; j++) {
      startingPos--;
      validMoves.push([startingPos, j]);
      if (!IsTileEmpty(startingPos, j, board)) {
        break;
      }
    }
  }

  //mvoes right and downwards
  else if (activePiece.x < x && activePiece.y < y) {
    let startingPos = activePiece.x;
    for (let j = activePiece.y + 1; j <= 8; j++) {
      startingPos++;
      validMoves.push([startingPos, j]);
      if (!IsTileEmpty(startingPos, j, board)) {
        break;
      }
    }
  }

  return validMoves;
};
