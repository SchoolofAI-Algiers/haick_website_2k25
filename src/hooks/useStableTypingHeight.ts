import { useEffect, useRef, useState } from 'react';

export function useStableTypingHeight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isHeightCalculated, setIsHeightCalculated] = useState(false);

  useEffect(() => {
    // Function to calculate the height of content with all text visible
    const calculateHeight = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const originalDisplay = container.style.display;
      
      // 1. Make container visible but off-screen for accurate measurement
      container.style.position = 'absolute';
      container.style.visibility = 'hidden';
      container.style.display = 'block';
      
      // 2. Temporarily make all typing text fully visible
      const typingElements = container.querySelectorAll('[data-typing-animation="true"]');
      const originalStates = Array.from(typingElements).map(el => {
        const element = el as HTMLElement;
        return {
          element,
          visibility: element.style.visibility,
          display: element.style.display,
          opacity: element.style.opacity
        };
      });
      
      typingElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.visibility = 'visible';
          el.style.display = 'inline';
          el.style.opacity = '1';
        }
      });
      
      // 3. Get the height with all content visible
      const fullHeight = container.scrollHeight;
      setContainerHeight(fullHeight);
      
      // 4. Restore original styling
      typingElements.forEach((el, i) => {
        if (el instanceof HTMLElement) {
          el.style.visibility = originalStates[i].visibility;
          el.style.display = originalStates[i].display;
          el.style.opacity = originalStates[i].opacity;
        }
      });
      
      container.style.position = '';
      container.style.visibility = '';
      container.style.display = originalDisplay;
      
      setIsHeightCalculated(true);
    };
    
    // Calculate immediately and after a short delay to ensure all content is rendered
    calculateHeight();
    const timer1 = setTimeout(calculateHeight, 50);
    const timer2 = setTimeout(calculateHeight, 200); // Extra safety timer
    
    // Also recalculate on window resize
    window.addEventListener('resize', calculateHeight);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);
  
  return { containerRef, containerHeight, isHeightCalculated };
}
