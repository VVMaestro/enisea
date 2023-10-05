export interface ButtonProps {
  styleType?: 'primary' | 'secondary' | 'accent' | 'ghost';
  view?: 'filled' | 'outlined';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  normalCase?: boolean;
  square?: boolean;
  circle?: boolean;
  className?: string;
}