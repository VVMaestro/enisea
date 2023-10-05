import cn from 'classnames';
import {ButtonProps} from './ButtonProps';

export function getButtonStyles(props: ButtonProps) {
  const {
    styleType = 'primary',
    view = 'filled',
    size = 'md',
    normalCase = true,
    square = false,
    circle = false,
    className = ''
  } = props;

  return cn(
    'btn',
    className,
    {
      ['btn-primary']: styleType === 'primary',
      ['btn-secondary']: styleType === 'secondary',
      ['btn-accent']: styleType === 'accent',
      ['btn-ghost']: styleType === 'ghost',
      ['btn-outline']: view === 'outlined',
      ['btn-sm']: size === 'sm',
      ['btn-md']: size === 'md',
      ['btn-lg']: size === 'lg',
      ['btn-xs']: size === 'xs',
      ['normal-case']: normalCase,
      ['btn-square']: square,
      ['btn-circle']: circle
    }
  );
}
