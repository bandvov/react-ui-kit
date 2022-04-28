export type Variant =
  | "success"
  | "danger"
  | "error"
  | "success-outlined"
  | "danger-outlined"
  | "error-outlined"
  | "default-outlined";

export type CommonProps = {
  ref?: MutableRefObject<any>;
  key?: string | number;
  className?: string;
  onClick?: () => void;
  onBlur?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onKeyDown?: (event: any) => void;
  style?: CSSProperties;
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
  justify?: "center" | "flex-start" | "flex-end" | "stretch";
  type?: "button" | "submit";
}

export interface IBadge extends CommonProps {
  children: ReactNode;
  color?: string;
  background?: string;
  label?: string | number;
  borderRadius?: string;
  border?: string;
  position?: "top" | "bottom";
}

export type Position =
  | "bottom"
  | "top"
  | "left"
  | "right"
  | "right-bottom"
  | "right-top"
  | "left-bottom"
  | "left-top";
interface ILabel {
  checked?: boolean;
  before?: any;
  disabled?: boolean;
  rounded?: boolean;
  backgroundColor?: string;
}

interface DropdownItem {
  id: number;
  title: string;
  selected: boolean;
  url?: string;
}
