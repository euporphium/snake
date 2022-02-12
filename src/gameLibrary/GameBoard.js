export default class GameBoard {
  #rowCount;
  #colCount;
  #cells;

  constructor(rowCount, colCount) {
    this.#rowCount = rowCount;
    this.#colCount = colCount;
    this.#cells = [];

    let counter = 1;
    for ( let row = 0; row < rowCount; row++ ) {
      const currRow = [];
      for ( let col = 0; col < colCount; col++ ) {
        currRow.push(counter++);
      }
      this.#cells.push(currRow);
    }
  }

  getCells = () => this.#board;
  get cells() {
    return this.#cells;
  }

  getCellNum = (row, col) => {
    const isValidCell = (0 <= row && row < this.#rowCount) && (0 <= col && col < this.#colCount);
    return (isValidCell) ? this.#cells[row][col] : null;
  };
}