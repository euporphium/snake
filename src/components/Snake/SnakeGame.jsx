import React, { useEffect, useState } from 'react';
import { randomNumberGenerator, useInterval } from '../../util';
import { GameBoard, Snake } from '../../gameLibrary';
import './Snake.scss';

const ROWS = 10;
const COLUMNS = 10;
const START_ROW = 2;
const START_COLUMN = 2;
const FPS = 5;

function SnakeGame({ debug = false } = {}) {
  const [rand] = useState(randomNumberGenerator(1, ROWS * COLUMNS));
  const [board] = useState(new GameBoard(ROWS, COLUMNS));
  const [snake] = useState(new Snake(board, START_ROW, START_COLUMN));

  const [foodCellNums, setFoodCellNums] = useState(new Set([rand.next().value]));
  const [snakeCellNums, setSnakeCellNums] = useState(snake.occupiedCellNums);
  const [isRunning, setIsRunning] = useState(true);

  const handleKeydown = e => {
    const getDirectionFromKey = key => {
      if (key === 'ArrowUp') return Snake.Direction.Up;
      if (key === 'ArrowRight') return Snake.Direction.Right;
      if (key === 'ArrowDown') return Snake.Direction.Down;
      if (key === 'ArrowLeft') return Snake.Direction.Left;
      return '';
    };

    const newDirection = getDirectionFromKey(e.key);
    if (!!newDirection) {
      snake.changeDirection(newDirection);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', e => handleKeydown(e));
  }, []);

  useInterval(() => {
    moveSnake();
  }, isRunning ? (1000 / FPS) : null);

  function endGame() {
    setIsRunning(false);
  }

  function moveSnake() {
    snake.move((row, col) => {
      const tgtCellNum = board.getCellNum(row, col);

      if (!tgtCellNum) {
        endGame();
        return {};
      }

      if (snakeCellNums.has(tgtCellNum)) {
        endGame();
        return {};
      }

      if (foodCellNums.has(tgtCellNum)) {
        setFoodCellNums(new Set([rand.next().value]));
        return { row, col, cellNum: tgtCellNum, grow: true };
      }

      // row col might be different if snake can wrap
      return { row, col, cellNum: tgtCellNum, grow: false };
    });
    setSnakeCellNums(new Set(snake.occupiedCellNums));
  }

  function getCellClass(cellNum) {
    if (snakeCellNums.has(cellNum)) {
      return 'cell cell--snake';
    }
    if (foodCellNums.has(cellNum)) {
      return 'cell cell--food';
    }

    return 'cell';
  }

  return (
    <div id="snake-game">
      <h1>Snake</h1>
      {debug && <button onClick={moveSnake}>Step</button>}
      <div className="snake-game__board">
        {board.cells.map((row, i) => (
          <div key={i} className="row">
            {row.map((cellNum, j) => (
              <div key={j} className={getCellClass(cellNum)}>
                {debug && cellNum}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SnakeGame;
