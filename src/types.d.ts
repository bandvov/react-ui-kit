export type Variant =
  | "success"
  | "danger"
  | "disabled"
  | "error"
  | "success-outlined"
  | "danger-outlined"
  | "error-outlined"
  | "default-outlined";

  export type CommonProps = {
    className?: string;
    backgroundColor?: string;
    color?: string;
    border?: string    
    borderRadius?: string;
    onClick?: ()=> void;
  }
  export interface IButton {
    children?: React.ReactNode | string | number;
    style?: CSSProperties;
    variant?: Variant;
    className?: string;
    outlined?: boolean;
    backgroundColor?: string;
    fullWidth?: string;
    color?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    rounded?: boolean;
    border?: string;
    icon?: ReactElement;
    iconLeft?: ReactElement;
    disabled?: boolean;
    onClick?: ()=> void;
  }
  
  export interface IBadge {
    className?: string;
    children: ReactNode;
    color?: string;
    background?: string;
    label?: string | number;
      borderRadius?: string;
      size?: small | medium | ladge;
      border?: string    
      onClick?: ()=> void;
    }