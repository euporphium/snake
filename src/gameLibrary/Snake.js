class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class Snake {
  #head; // head of the snake
  #tail; // head of the linked list
  #occupiedCellNums;
  #direction;

  constructor(board, startRow, startCol) {
    const node = new Node({
      row: startRow,
      col: startCol,
      cellNum: board.getCellNum(startRow, startCol),
    });

    this.#head = node;
    this.#tail = node;
    this.#occupiedCellNums = new Set([node.value.cellNum]);
    this.#direction = Snake.Direction.Right;
  }

  changeDirection(newDirection) {
    this.#direction = newDirection;
  }

  get occupiedCellNums() {
    return this.#occupiedCellNums;
  }

  move(moveTo) {
    const { tgtRow, tgtCol } = this.#getNext();
    const { row, col, cellNum, grow } = moveTo(tgtRow, tgtCol);

    if (cellNum) {
      this.#updateSnake({ row, col, cellNum }, grow);
    }
  }

  #updateSnake = ({ row, col, cellNum }, grow) => {
    const next = new Node({ row, col, cellNum });

    this.#head.next = next;
    this.#head = next;
    this.#occupiedCellNums.add(cellNum);

    if (!grow) {
      this.#occupiedCellNums.delete(this.#tail.value.cellNum);
      this.#tail = this.#tail.next;
    }
  };

  #getNext = () => {
    const rowDelta = this.#direction === Snake.Direction.Down ? 1 : this.#direction === Snake.Direction.Up ? -1 : 0;
    const colDelta = this.#direction === Snake.Direction.Right ? 1 : this.#direction === Snake.Direction.Left ? -1 : 0;
    return {
      tgtRow: this.#head.value.row + rowDelta,
      tgtCol: this.#head.value.col + colDelta,
    };
  };
}

Snake.Direction = {
  Up: 'UP',
  Down: 'DOWN',
  Left: 'LEFT',
  Right: 'RIGHT',
};