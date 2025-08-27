import React from 'react';
import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-60 disabled:cursor-not-allowed';

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm sm:text-base px-6 py-3',
  lg: 'text-base sm:text-lg px-8 py-4',
};

const variants = {
  // Premium glossy gradient with subtle border
  primary:
    'relative text-black bg-gradient-to-b from-zinc-200 to-zinc-300 shadow-md hover:shadow-lg hover:brightness-105 border border-white/20',
  // Dark glossy pill
  dark:
    'relative text-zinc-100 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-zinc-700 shadow-md hover:shadow-xl',
  // Outline with hover fill
  outline:
    'relative text-zinc-200 border-2 border-zinc-500/60 hover:bg-zinc-700/30',
  // Glassmorphism (translucent with blur)
  glass:
    'relative text-white/90 bg-white/10 hover:bg-white/15 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-md',
  // Prism animated gradient
  prism:
    'relative text-white overflow-hidden',
};

export default function Button({
  as = 'a',
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  prismStops,
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  
  // Check if href is internal (starts with /) and use Link for internal navigation
  if (href && href.startsWith('/') && as === 'a') {
    return (
      <Link to={href} className={classes} {...rest}>
        {variant === 'prism' && (
          <>
            <span
              className="absolute -inset-px rounded-full opacity-80 blur-sm animate-[spin_6s_linear_infinite]"
              style={{
                background:
                  `conic-gradient(${prismStops?.join(', ') || 'rgba(168,85,247,0.9), rgba(59,130,246,0.9), rgba(236,72,153,0.9), rgba(250,204,21,0.9), rgba(168,85,247,0.9)'})`,
              }}
            />
            <span className="absolute inset-[2px] rounded-full bg-white/10 backdrop-blur-md border border-white/20" />
          </>
        )}
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-white/20 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity" />
      </Link>
    );
  }
  
  const Tag = as;
  return (
    <Tag href={href} type={as === 'button' ? type : undefined} className={classes} {...rest}>
      {variant === 'prism' && (
        <>
          <span
            className="absolute -inset-px rounded-full opacity-80 blur-sm animate-[spin_6s_linear_infinite]"
            style={{
              background:
                `conic-gradient(${prismStops?.join(', ') || 'rgba(168,85,247,0.9), rgba(59,130,246,0.9), rgba(236,72,153,0.9), rgba(250,204,21,0.9), rgba(168,85,247,0.9)'})`,
            }}
          />
          <span className="absolute inset-[2px] rounded-full bg-white/10 backdrop-blur-md border border-white/20" />
        </>
      )}
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-white/20 via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity" />
    </Tag>
  );
}


