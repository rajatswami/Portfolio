import Link from "next/link";

interface LogoProps {
  className?: string;
}

/** The "Rajat Swami" brand mark, shared by the navbar and header. */
const Logo = ({ className = "" }: LogoProps) => (
  <Link
    href="/"
    className={`font-[var(--font-display)] text-xl font-bold text-white ${className}`}
  >
    Rajat <span className="text-gold-400">Swami</span>
  </Link>
);

export default Logo;
