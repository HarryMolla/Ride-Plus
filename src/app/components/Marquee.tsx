import { cn } from '@/lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}


export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 10,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className 
      )}
      style={{ '--repeat': repeat } as React.CSSProperties} 
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 justify-around [gap:var(--gap)]',
              {
                // Horizontal
                'animate-marquee flex-row': !vertical && !reverse,
                'animate-marquee-reverse flex-row-reverse': !vertical && reverse, // NEW: Reverse class + order
                // Vertical
                'animate-marquee-vertical flex-col': vertical && !reverse,
                'animate-marquee-vertical-reverse flex-col-reverse': vertical && reverse,
                // Pause
                'group-hover:[animation-play-state:paused]': pauseOnHover,
              }
            )}
          >
            {children}
        </div>
      ))}
    </div>
  );
}