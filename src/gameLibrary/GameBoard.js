export default class GameBoard {
  #rowCount;
  #colCount;
  #board;

  constructor(rowCount, colCount) {
    this.#rowCount = rowCount;
    this.#colCount = colCount;
    this.#board = [];

    let counter = 1;
    for ( let row = 0; row < rowCount; row++ ) {
      const currRow = [];
      for ( let col = 0; col < colCount; col++ ) {
        currRow.push(counter++);
      }
      this.#board.push(currRow);
    }
  }

  getCells = () => this.#board;

  getCellNum = (row, col) => {
    const isValidCell = (0 <= row && row < this.#rowCount) && (0 <= col && col < this.#colCount);
    return (isValidCell) ? this.#board[row][col] : null;
  };
}