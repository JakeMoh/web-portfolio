import { useState } from 'react';
import {Button, Typography} from '@mui/material';
import './alignFive.css';

const BOARD_SIZE: number = 16;

function getSquareIndex(row: number, col: number): number {
  
  return row * BOARD_SIZE + col;
}

function getSquareValue(squares: Array<String>, row: number, col: number): String | null {
  if (row < 0 || row > BOARD_SIZE || col < 0 || col > BOARD_SIZE) {
    return null;
  }
  return squares[getSquareIndex(row, col)];
}

function Square(props: any) {
  return (
    <Button
      variant="outlined"
      style={{ width: 30, height: 30, minWidth: 30, minHeight: 30 }}
      onClick={() => props.onClick()}
    >
      {props.value}
    </Button>
  )
}

function Board(props: any) {
  const renderSquare = (row: number, col: number) => {
    return (
      <Square
        key={row + "," + col}
        onClick={() =>  props.onClick(row, col)}
        value={props.squares[getSquareIndex(row, col)]}
      />
    )
  }

  let board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    let squares = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      squares.push(renderSquare(row, col));
    }
    board.push(<div className="board-row" key={row}>{squares}</div>)
  }
 
  return (
    <div>{board}</div>
  )
}

function ConnectFive() {
  const [squares, setSquares] = useState(Array(16*16).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const calculateWinner = (squares: Array<String>): String | null => {
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col <BOARD_SIZE; col++) {
        const squareValue = getSquareValue(squares, row, col);
        if (squareValue && 
          squareValue === getSquareValue(squares, row, col + 1) && 
          squareValue === getSquareValue(squares, row, col + 2) &&
          squareValue === getSquareValue(squares, row, col + 3) &&
          squareValue === getSquareValue(squares, row, col + 4)) {
          return squareValue;
        }
        if (squareValue && 
          squareValue === getSquareValue(squares, row + 1, col) && 
          squareValue === getSquareValue(squares, row + 2, col) &&
          squareValue === getSquareValue(squares, row + 3, col) &&
          squareValue === getSquareValue(squares, row + 4, col)) {
          return squareValue;
        }
        if (squareValue && 
          squareValue === getSquareValue(squares, row + 1, col + 1) && 
          squareValue === getSquareValue(squares, row + 2, col + 2) &&
          squareValue === getSquareValue(squares, row + 3, col + 3) &&
          squareValue === getSquareValue(squares, row + 4, col + 4)) {
          return squareValue;
        }
        if (squareValue && 
          squareValue === getSquareValue(squares, row + 1, col - 1) && 
          squareValue === getSquareValue(squares, row + 2, col - 2) &&
          squareValue === getSquareValue(squares, row + 3, col - 3) &&
          squareValue === getSquareValue(squares, row + 4, col - 4)) {
          return squareValue;
        }
      }
    }
    return null;
  }

  const winner: String | null = calculateWinner(squares);

  const handleClick = (row: number, col: number) => {
    if (winner || squares[getSquareIndex(row, col)]) {
      return;
    }
    const squares_: Array<String> = squares.slice();
    console.log("Button click: row: " + row + ", col: " + col);
    squares_[getSquareIndex(row, col)] = isXTurn? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(squares_);
  }

  const reset = () => {
    setSquares(Array(16*16).fill(null));
    setIsXTurn(true);
  }

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (isXTurn? "X": "O");
  }

  return (
    <div className="align-five">
      <Board
        onClick = {(row: number, col: number) => handleClick(row, col)}
        squares={squares}
      />
      <div className="game-info">
        <Typography align="left">{status}</Typography>
        <Button onClick={reset} variant="outlined">Restart</Button>
      </div>
    </div>
  );
}

export default ConnectFive;