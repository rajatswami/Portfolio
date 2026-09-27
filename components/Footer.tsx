import { SocialLinks } from "../common";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-neutral-950/60 py-8">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm text-neutral-500">
          &copy; 2026 Rajat Swami. Built with React, TypeScript &amp; Tailwind.
        </p>
        <SocialLinks variant="plain" />
      </div>
    </footer>
  );
};

export default Footer;
