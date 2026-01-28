import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'text'>('default');
  const [hoverText, setHoverText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isLink = target.closest('a, button, [role="button"]');
      const isInput = target.closest('input, textarea');
      const customLabel = target.getAttribute('data-cursor');

      if (isInput) {
        setCursorState('text');
        setHoverText('');
      } else if (isLink) {
        setCursorState('hover');
        setHoverText(customLabel || '');
      } else {
        setCursorState('default');
        setHoverText('');
      }
    };

    const handleMouseOut = () => setIsVisible(false);
    const handleMouseIn = () => setIsVisible(true);

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseIn);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseIn);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        pointerEvents: 'none',
        zIndex: 9999,
display: isVisible ? 'flex' : 'none',        alignItems: 'center',
        justifyContent: 'center',
      }}
      initial={false}
      animate={{
        width: cursorState === 'hover' ? 80 : cursorState === 'text' ? 2 : 24,
        height: cursorState === 'hover' ? 80 : cursorState === 'text' ? 32 : 24,
        backgroundColor: cursorState === 'text' ? '#1A1A1A' : cursorState === 'hover' ? 'rgba(24, 182, 164, 0.2)' : 'rgba(24, 182, 164, 0.4)',
        border: cursorState === 'hover' ? '1px solid rgba(24, 182, 164, 0.5)' : 'none',
        borderRadius: cursorState === 'text' ? '2px' : '50%',
        backdropFilter: cursorState === 'hover' ? 'blur(4px)' : 'none',
      }}
    >
      {cursorState === 'hover' && hoverText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-bold uppercase tracking-widest text-brand-ink pointer-events-none"
        >
          {hoverText}
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
