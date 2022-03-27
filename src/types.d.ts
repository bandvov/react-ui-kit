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
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  onClick?: () => void;
};
export interface IButton {
  key?: string | number;
  children?: React.ReactNode | string | number;
  style?: CSSProperties;
  variant?: Variant;
  className?: string;
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

export interface IBadge {
  key?: string | number;
  className?: string;
  children: ReactNode;
  color?: string;
  background?: string;
  label?: string | number;
  borderRadius?: string;
  border?: string;
  onClick?: () => void;
  position?: "top" | "bottom";
}
