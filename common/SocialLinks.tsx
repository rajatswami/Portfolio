import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import type { IconType } from "react-icons";
import { socials } from "../data/resume";

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  external?: boolean;
}

const DEFAULT_LINKS: (SocialLink & { isChannel: boolean })[] = [
  { icon: FaGithub, href: socials.github, label: "GitHub", external: true, isChannel: true },
  { icon: FaLinkedin, href: socials.linkedin, label: "LinkedIn", external: true, isChannel: true },
  { icon: MdEmail, href: socials.email, label: "Email", isChannel: false },
];

export interface SocialLinksProps {
  links?: SocialLink[];
  excludeEmail?: boolean;
  /** "button" = circular bordered icon buttons (hero/contact); "plain" = bare icons (footer). */
  variant?: "button" | "plain";
  className?: string;
}

const buttonClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:text-gold-300 hover:shadow-[0_0_20px_rgba(245,181,68,0.3)]";

const plainClass = "text-neutral-500 transition-colors hover:text-gold-300";

/** Row of social/contact icon links, shared by Hero, Contact and Footer. */
const SocialLinks = ({
  links,
  excludeEmail = false,
  variant = "button",
  className = "",
}: SocialLinksProps) => {
  const activeLinks =
    links ?? (excludeEmail ? DEFAULT_LINKS.filter((l) => l.isChannel) : DEFAULT_LINKS);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {activeLinks.map(({ icon: Icon, href, label, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className={variant === "button" ? buttonClass : plainClass}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
