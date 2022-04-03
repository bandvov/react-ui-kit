export type Variant =
  | "success"
  | "danger"
  | "error"
  | "success-outlined"
  | "danger-outlined"
  | "error-outlined"
  | "default-outlined";

export type CommonProps = {
  key?: string | number;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
};
export interface IButton extends CommonProps {
  children?: React.ReactNode | string | number;
  variant?: Variant;
  backgroundColor?: string;
  fullWidth?: boolean;
  color?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  rounded?: boolean;
  border?: string;
  icon?: ReactElement;
  iconLeft?: ReactElement;
  disabled?: boolean;
  onClick?: () => void;
  justify?: "center" | "flex-start" | "flex-end" | "stretch";
}

export interface IBadge extends CommonProps {
  children: ReactNode;
  color?: string;
  background?: string;
  label?: string | number;
  borderRadius?: string;
  border?: string;
  onClick?: () => void;
  position?: "top" | "bottom";
}