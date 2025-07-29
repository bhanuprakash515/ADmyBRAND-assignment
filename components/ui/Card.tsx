import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Card({ title, children, footer, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl bg-white/5 border border-white/10 p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="text-neutral-300">{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}
