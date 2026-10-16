import { useEffect, useRef, useState } from 'react';

/** Small yellow dot that follows the pointer and grows over interactive elements. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const t = e.target as HTMLElement;
      setBig(!!t.closest('a, button, [data-cursor]'));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div ref={ref} className="cursor-dot hidden md:block fixed top-0 left-0 z-[70] pointer-events-none mix-blend-difference">
      <div
        className="rounded-full bg-[#FFD60A] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        style={{ width: big ? 44 : 10, height: big ? 44 : 10 }}
      />
    </div>
  );
}
