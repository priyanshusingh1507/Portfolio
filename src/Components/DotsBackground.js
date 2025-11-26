'use client';
import { useEffect, useRef } from 'react';

const DotsBackground = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    // Create dots
    const dotCount = Math.floor((width * height) / 15000);
    dots.current = Array.from({ length: dotCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25
    }));

    // Handle mouse move
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw dots
      dots.current.forEach((dot, i) => {
        // Move dots
        dot.x += dot.speedX;
        dot.y += dot.speedY;
        
        // Bounce off edges
        if (dot.x < 0 || dot.x > width) dot.speedX *= -1;
        if (dot.y < 0 || dot.y > height) dot.speedY *= -1;
        
        // Draw dot
        ctx.fillStyle = `rgba(168, 85, 247, ${dot.size / 3})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw lines to nearby dots
        dots.current.slice(i + 1).forEach(dot2 => {
          const dx = dot.x - dot2.x;
          const dy = dot.y - dot2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - distance / 150) * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        });
        
        // Draw line to mouse if close
        const mouseDx = dot.x - mousePos.current.x;
        const mouseDy = dot.y - mousePos.current.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        if (mouseDistance < 200) {
          ctx.strokeStyle = `rgba(236, 72, 153, ${(1 - mouseDistance / 200) * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mousePos.current.x, mousePos.current.y);
          ctx.stroke();
        }
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default DotsBackground;
