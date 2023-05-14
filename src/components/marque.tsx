import { useEffect, useRef } from 'react';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    if (marqueeElement) {
      marqueeElement.scrollLeft = marqueeElement.scrollWidth;
    }
  }, []);

  return (
    <div className="marquee h3 text-info bg-black p-3" ref={marqueeRef}>
      <span>{text}</span>
    </div>
  );
};

export default Marquee;
