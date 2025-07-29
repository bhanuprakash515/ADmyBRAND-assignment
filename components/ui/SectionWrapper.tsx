interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full max-w-7xl mx-auto px-4 py-16 ${className}`}
    >
      {children}
    </section>
  );
}
