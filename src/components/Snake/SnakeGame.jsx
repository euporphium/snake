import React, { useCallback, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import FruitIcon from './FruitIcon/FruitIcon';
import { GameBoard, Snake } from '../../gameLibrary';
import { randomNumberGenerator, useInterval } from '../../util';
import './Snake.scss';

const ROWS = 10;
const COLUMNS = 10;
const START_ROW = 2;
const START_COLUMN = 2;
const FPS = 5;

function SnakeGame() {
  const [rand] = useState(randomNumberGenerator(1, ROWS * COLUMNS));
  const [board] = useState(new GameBoard(ROWS, COLUMNS));
  const [snake] = useState(new Snake(board, START_ROW, START_COLUMN));

  const [foodCellNums, setFoodCellNums] = useState(new Set([rand.next().value]));
  const [snakeCellNums, setSnakeCellNums] = useState(snake.occupiedCellNums);
  const [isGameOver, setIsGameOver] = useState(false);

  const swipeableHandlers = useSwipeable({
    onSwipedUp: () => snake.changeDirection(Snake.Direction.Up),
    onSwipedRight: () => snake.changeDirection(Snake.Direction.Right),
    onSwipedDown: () => snake.changeDirection(Snake.Direction.Down),
    onSwipedLeft: () => snake.changeDirection(Snake.Direction.Left),
    preventDefaultTouchmoveEvent: true,
  });

  const handleKeydown = useCallback((e) => {
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
  }, [snake]);

  useEffect(() => {
    window.addEventListener('keydown', e => handleKeydown(e));
  }, [handleKeydown]);

  useInterval(() => {
    moveSnake();
  }, isGameOver ? null : (1000 / FPS));

  function endGame() {
    setIsGameOver(true);
  }

  function startOver() {
    snake.reset(START_ROW, START_COLUMN);
    setIsGameOver(false);
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
        return { tgtCellNum, grow: true };
      }

      return { tgtCellNum, grow: false };
    });
    setSnakeCellNums(new Set(snake.occupiedCellNums));
  }

  return (
    <>
      <main {...swipeableHandlers}>
        <h1>Snake</h1>
        <div className="snake-game__board">
          {board.cells.map((row, i) => (
            <div key={i} className="row">
              {row.map((cellNum, j) => (
                <div key={j} className={'cell'}>
                  {snakeCellNums.has(cellNum) && <SnakeGame.SnakeCell key={cellNum}/>}
                  {foodCellNums.has(cellNum) && <SnakeGame.FoodCell/>}
                </div>
              ))}
            </div>
          ))}
        </div>
        {isGameOver && (
          <button className="snake-game__btn" onClick={startOver}>Try Again</button>
        )}
      </main>
      <footer>
        <a href="https://www.vecteezy.com/free-vector/fruit-icon">Fruit Icon Vectors by Vecteezy</a>
      </footer>
    </>
  );
}

SnakeGame.FoodCell = ({ cellNum }) => {
  return (
    <div className="cell">
      <FruitIcon key={cellNum} name={FruitIcon.Type.APPLE}/>
    </div>
  );
};
SnakeGame.SnakeCell = ({ cellNum }) => <div key={cellNum} className="cell cell--snake"/>;

export default SnakeGame;
