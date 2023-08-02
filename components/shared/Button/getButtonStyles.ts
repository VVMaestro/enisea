import cn from 'classnames';
import {ButtonProps} from './ButtonProps';

export function getButtonStyles(props: ButtonProps) {
  const {
    styleType = 'primary',
    view = 'filled',
    size = 'md',
    normalCase = true,
    square = false,
    className = ''
  } = props;

  const classNames = cn(
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
      ['normal-case']: normalCase,
      ['btn-square']: square  
    }
  );

  return classNames;
}
