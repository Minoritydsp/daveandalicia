// src/components/SnakeGame.tsx
'use client'; // Pastikan menambahkan direktif ini di bagian atas

import React, { useState, useEffect } from 'react';

const SnakeGame = () => {
  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 20, y: 0 },
  ]);
  const [apple, setApple] = useState({ x: 50, y: 50 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const gridSize = 20;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
    if (e.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
    if (e.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
    if (e.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
  };

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      if (direction === 'UP') head.y -= gridSize;
      if (direction === 'DOWN') head.y += gridSize;
      if (direction === 'LEFT') head.x -= gridSize;
      if (direction === 'RIGHT') head.x += gridSize;

      newSnake.unshift(head);
      newSnake.pop();
      setSnake(newSnake);

      if (head.x === apple.x && head.y === apple.y) {
        setApple({
          x: Math.floor(Math.random() * 25) * gridSize,
          y: Math.floor(Math.random() * 25) * gridSize,
        });
        newSnake.push({ x: 0, y: 0 }); // Grow the snake
        setSnake(newSnake);
      }

      if (
        head.x < 0 ||
        head.x >= 500 ||
        head.y < 0 ||
        head.y >= 500 ||
        snake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
      }
    };

    const interval = setInterval(() => moveSnake(), 100);
    return () => clearInterval(interval);
  }, [snake, direction, apple, gameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction]);

  return (
    <div style={{ position: 'relative', width: '500px', height: '500px', backgroundColor: '#f0f0f0' }}>
      {gameOver && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px' }}>
          Hahaha kamu kalah, hukumannya peluk aku! 💖
        </div>
      )}
      {snake.map((segment, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${segment.y}px`,
            left: `${segment.x}px`,
            width: `${gridSize}px`,
            height: `${gridSize}px`,
            backgroundColor: index === 0 ? 'green' : 'lightgreen',
          }}
        />
      ))}
      <img
        src="/foto-alicia.jpg"
        alt="Apple"
        style={{
          position: 'absolute',
          top: `${apple.y}px`,
          left: `${apple.x}px`,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default SnakeGame;
