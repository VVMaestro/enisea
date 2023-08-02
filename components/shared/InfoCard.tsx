import React, {ComponentPropsWithRef, ReactHTMLElement, ReactNode} from 'react';
import {Divider} from './Divider';

interface PropTypes extends ComponentPropsWithRef<'article'> {
  title: string;
  headLevel?: 1 | 2 | 3 | 4 | 5;
}

function getHeadTag(text: string, headLevel: PropTypes['headLevel'] = 3): ReactNode {
  const className = 'font-bold text-lg';
  
  const headsMap: Record<number, ReactNode> = {
    '1': <h1 className={className}>{text}</h1>,
    '2': <h2 className={className}>{text}</h2>,
    '3': <h3 className={className}>{text}</h3>,
    '4': <h4 className={className}>{text}</h4>,
    '5': <h5 className={className}>{text}</h5>
  };

  return headsMap[headLevel];
}

export function InfoCard(props: PropTypes) {
  const {children, title, className, headLevel} = props;
  
  return (
    <article className={className}>
      {getHeadTag(title, headLevel)}
      <Divider color={'orange'} withPadding={false} />
      <p>
        {children}
      </p>
    </article>
  );
}
