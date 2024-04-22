interface ButtonProps {
  children: string;
  primary?: boolean | undefined;
  secondary?: boolean | undefined;
  warning?: boolean | undefined;
  success?: boolean | undefined;
  danger?: boolean | undefined;
  outline?: boolean | undefined;
  rounded?: boolean | undefined;
}

export default function Button({
  children,
  outline,
  rounded,
  ...props
}: ButtonProps) {
  const variants = Object.keys(props);
  if (variants.length > 1) {
    throw new Error(
      "Only one of primary, secondary, warning, success danger can be true!"
    );
  }

  return <button>{children}</button>;
}
