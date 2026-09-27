import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  /** Tailwind max-width class for the inner container. */
  maxWidth?: string;
  className?: string;
}

/** Shared `<section>` shell: consistent vertical rhythm + centered container. */
const Section = ({
  id,
  children,
  maxWidth = "max-w-[1536px]",
  className = "",
}: SectionProps) => (
  <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
    <div className={`mx-auto ${maxWidth} px-5 sm:px-8 lg:px-12 xl:px-16`}>
      {children}
    </div>
  </section>
);

export default Section;
