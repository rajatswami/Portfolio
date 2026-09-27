import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

interface BaseProps {
  label?: ReactNode;
}

type FormFieldProps = BaseProps &
  (
    | ({ as?: "input" } & InputHTMLAttributes<HTMLInputElement>)
    | ({ as: "textarea" } & TextareaHTMLAttributes<HTMLTextAreaElement>)
  );

const fieldClass = (extra: string) =>
  [
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-gold-400/50",
    extra,
  ]
    .filter(Boolean)
    .join(" ");

/** Labeled input/textarea component used in the contact form. */
const FormField = ({ label, className, ...rest }: FormFieldProps) => (
  <div>
    {label && (
      <label className="mb-1.5 block text-sm text-neutral-400">
        {label}
      </label>
    )}
    {rest.as === "textarea" ? (
      <textarea
        {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={fieldClass(`resize-none ${className ?? ""}`)}
      />
    ) : (
      <input
        {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        className={fieldClass(className ?? "")}
      />
    )}
  </div>
);

export default FormField;
