export interface ButtonProps {
  styleType?: 'primary' | 'secondary' | 'accent' | 'ghost';
  view?: 'filled' | 'outlined';
  size?: 'lg' | 'md' | 'sm';
  normalCase?: boolean;
  square?: boolean;
  className?: string;
}