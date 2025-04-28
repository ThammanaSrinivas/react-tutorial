export enum ButtonVariant {
  DEFAULT = "btn-primary",
  SUCCESS = "btn-success",
  FAILURE = "btn-danger",
  WARNING = "btn-warning",
  LINK = "btn-link",
}
interface Props {
  children: string;
  variant?: ButtonVariant;
  onSelect?: () => void;
}
const Button = ({
  children,
  variant = ButtonVariant.DEFAULT,
  onSelect,
}: Props) => {
  return (
    <button type="button" className={"btn " + variant} onClick={onSelect}>
      {children}
    </button>
  );
};

export default Button;
