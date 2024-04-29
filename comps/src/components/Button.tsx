import clsx from "clsx";

interface ButtonProps {
  children: string;
  primary?: boolean | undefined;
  secondary?: boolean | undefined;
  warning?: boolean | undefined;
  success?: boolean | undefined;
  danger?: boolean | undefined;
  rounded?: boolean | undefined;
  outline?: boolean | undefined;
  className?: string | undefined;
  onClick?: (e: React.SyntheticEvent) => void;
}

export default function Button({
  children,
  rounded,
  outline,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const variants = Object.keys(props);
  if (variants.length > 1) {
    throw new Error(
      "Only one of primary, secondary, warning, success or danger can be true!"
    );
  }
  const { primary, secondary, warning, success, danger } = props;
  const classes = clsx("px-3 py-2 cursor-pointer", {
    "bg-blue-700  text-white": primary && !outline,
    "border border-zinc-300": secondary && !outline,
    "bg-yellow-500 text-white": warning && !outline,
    "bg-green-500 text-white": success && !outline,
    "bg-red-500 text-white": danger && !outline,
    "rounded-lg": rounded,
    "text-blue-700 border border-blue-700 bg-transparent": outline && primary,
    "text-blue-700 border border-zinc-300 bg-transparent": outline && secondary,
    "text-blue-700 border border-yellow-500 bg-transparent": outline && warning,
    "text-blue-700 border border-green-500 bg-transparent": outline && success,
    "text-blue-700 border border-red-500 bg-transparent": outline && danger,
  });

  return (
    <button className={`${classes} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
