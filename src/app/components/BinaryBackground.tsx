"use client"
import React, { useRef, useEffect } from 'react';

const BinaryCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Configuration: Sparse, slow rain with random sizes
    const columnWidth = 50; // Column width for spacing
    let columns = Math.floor(window.innerWidth / columnWidth);
    const bits: { x: number; y: number; value: '0' | '1'; speed: number; size: number }[] = [];

    // Initialize sparse bits with random sizes
    const setupBits = () => {
      bits.length = 0;
      for (let i = 0; i < columns; i++) {
        bits.push({
          x: i * columnWidth + columnWidth / 2, // Centered in each column
          y: Math.random() * window.innerHeight, // Random starting position
          value: Math.random() > 0.5 ? '0' : '1', // Random binary value
          speed: Math.random() * 1 + 0.5, // Slower speed (0.5 to 1.5 pixels/frame)
          size: Math.floor(Math.random() * 16) + 14, // Random font size between 14px and 30px
        });
      }
    };

    // Draw the falling bits
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      bits.forEach((bit) => {
        ctx.fillStyle = '#ffffff';
        ctx.font = `${bit.size}px monospace`; // Use random font size for each bit
        ctx.fillText(bit.value, bit.x, bit.y);
        bit.y += bit.speed;

        // Reset to top if out of view
        if (bit.y > canvas.height) {
          bit.y = -20;
          bit.value = Math.random() > 0.5 ? '0' : '1';
          bit.size = Math.floor(Math.random() * 16) + 14; // Assign new random size
        }
      });

      requestAnimationFrame(draw);
    };

    // Handle window resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(window.innerWidth / columnWidth);
      setupBits();
    };

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setupBits();
    draw();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default BinaryCanvas;