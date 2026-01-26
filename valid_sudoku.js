var isValidSudoku = function(board) {
    // check rows
    for (let i = 0; i < board.length; i++) {
        let seen = new Set();
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') {
                continue;
            }
            if (seen.has(board[i][j])) {
                return false;
            }
            seen.add(board[i][j]);
        }
    }

    //check cols
    for (let i = 0; i < board.length; i++) {
        let seen = new Set();
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] === '.') {
                continue;
            }
            if (seen.has(board[j][i])) {
                return false;
            }
            seen.add(board[j][i]);
        }
    }

    //check boxes
    for (let box = 0; box < board.length; box++) {
        let seen = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let row = Math.floor(box / 3) * 3 + i;
                let col = (box % 3) * 3 + j;
                if (board[row][col] === '.') {
                    continue;
                }
                if (seen.has(board[row][col])) {
                    return false;
                }
                seen.add(board[row][col]);
            }
        }
    }

    return true;
};