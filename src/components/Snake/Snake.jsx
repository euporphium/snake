import React, { useCallback, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Fruit from './Fruit/Fruit';
import { GameBoard, Snake, WeightedRandom } from '../../gameLibrary';
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
  const [fruitRandomizer] = useState(new WeightedRandom(Fruit.Names, Fruit.ProbabilityWeights()));
  const [fruit, setFruit] = useState(fruitRandomizer.getRandomItem());
  const [fruitCellNums, setFruitCellNums] = useState(new Set([rand.next().value]));
  const [snakeCellNums, setSnakeCellNums] = useState(snake.occupiedCellNums);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

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

      if (fruitCellNums.has(tgtCellNum)) {
        setScore(prevState => prevState + Fruit.Scores[fruit]);
        setFruit(fruitRandomizer.getRandomItem());
        setFruitCellNums(new Set([rand.next().value]));
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
        <div className="snake__board">
          {board.cells.map((row, i) => (
            <div key={i} className="row">
              {row.map((cellNum, j) => (
                <div key={j} className={'cell'}>
                  {snakeCellNums.has(cellNum) && <SnakeGame.SnakeCell/>}
                  {fruitCellNums.has(cellNum) && <Fruit.Memoized name={fruit}/>}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="snake__score">Score: {score}</div>
        {isGameOver && (
          <button className="snake__btn" onClick={startOver}>Try Again</button>
        )}
      </main>
      <footer>
        <a href="https://www.vecteezy.com/free-vector/fruit-icon">Fruit Icon Vectors by Vecteezy</a>
      </footer>
    </>
  );
}

SnakeGame.SnakeCell = () => <div className="cell cell--snake"/>;

export default SnakeGame;
