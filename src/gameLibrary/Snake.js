class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class Snake {
  #head; // head of the snake
  #tail; // head of the linked list
  #board;
  #occupiedCellNums;
  #direction;
  #wrappedMode;

  constructor(board, startRow, startCol, wrappedMode = true) {
    this.#board = board;
    this.#wrappedMode = wrappedMode;
    this.#initSnake(startRow, startCol);
  }

  get occupiedCellNums() {
    return this.#occupiedCellNums;
  }

  changeDirection(newDirection) {
    this.#direction = newDirection;
  }

  move(moveTo) {
    const { tgtRow, tgtCol } = this.#getNext();
    const { tgtCellNum, grow } = moveTo(tgtRow, tgtCol);

    if (tgtCellNum) {
      this.#updateSnake({ tgtRow, tgtCol, tgtCellNum }, grow);
    }
  }

  reset = (startRow, startCol) => this.#initSnake(startRow, startCol);

  #initSnake = (startRow, startCol) => {
    const node = new Node({
      row: startRow,
      col: startCol,
      cellNum: this.#board.getCellNum(startRow, startCol),
    });

    this.#head = node;
    this.#tail = node;
    this.#occupiedCellNums = new Set([node.value.cellNum]);
    this.#direction = Snake.Direction.Right;
  }

  #updateSnake = ({ tgtRow, tgtCol, tgtCellNum }, grow) => {
    const next = new Node({ row: tgtRow, col: tgtCol, cellNum: tgtCellNum });

    this.#head.next = next;
    this.#head = next;
    this.#occupiedCellNums.add(tgtCellNum);

    if (!grow) {
      this.#occupiedCellNums.delete(this.#tail.value.cellNum);
      this.#tail = this.#tail.next;
    }
  };

  #getNext = () => {
    const rowDelta = this.#direction === Snake.Direction.Down ? 1 : this.#direction === Snake.Direction.Up ? -1 : 0;
    const colDelta = this.#direction === Snake.Direction.Right ? 1 : this.#direction === Snake.Direction.Left ? -1 : 0;

    let tgtRow = this.#head.value.row + rowDelta;
    let tgtCol = this.#head.value.col + colDelta;

    if (!this.#board.getCellNum(tgtRow, tgtCol) && this.#wrappedMode) {
      if (rowDelta === 1) {
        tgtRow = 0;
      } else if (rowDelta === -1) {
        tgtRow = this.#board.rowCount - 1;
      } else if (colDelta === 1) {
        tgtCol = 0;
      } else if (colDelta === -1) {
        tgtCol = this.#board.colCount - 1;
      }
    }

    return { tgtRow, tgtCol };
  };
}

Snake.Direction = {
  Up: 'UP',
  Down: 'DOWN',
  Left: 'LEFT',
  Right: 'RIGHT',
};