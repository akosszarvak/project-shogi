export const InitialBoard = [];

//create initial positions for pieces

//PAWNS
for (let i = 0; i < 9; i++) {
  InitialBoard.push({ owner: 1, piece: "n", x: 2, y: i });
  InitialBoard.push({ owner: 2, piece: "n", x: 6, y: i });
}

//LANCER
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 0 });
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 8 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 0 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 8 });

//KNIGHTS
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 1 });
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 7 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 1 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 7 });

//SILVERS
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 2 });
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 6 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 2 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 6 });

//GOLD
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 3 });
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 5 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 3 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 5 });

//KING
InitialBoard.push({ owner: 1, piece: "n", x: 0, y: 4 });
InitialBoard.push({ owner: 2, piece: "n", x: 8, y: 4 });

//ROOKS
InitialBoard.push({ owner: 1, piece: "n", x: 1, y: 1 });
InitialBoard.push({ owner: 2, piece: "n", x: 7, y: 7 });

//BISHOPS

InitialBoard.push({ owner: 1, piece: "n", x: 1, y: 1 });
InitialBoard.push({ owner: 2, piece: "n", x: 7, y: 7 });
