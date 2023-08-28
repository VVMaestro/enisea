'use client';

import React, {ComponentPropsWithRef} from 'react';

interface IPropTypes extends ComponentPropsWithRef<'select'> {
  options: {
    label: string;
    value: string;
  }[];
  selected?: string;
  placeholder?: string;
}

export function Select(props: IPropTypes) {
  const {options, placeholder, onChange, selected} = props;

  return (
    <select
      placeholder={placeholder} 
      className="select max-w-xs"
      onChange={onChange}
      value={selected}
    >
      {
        options.map(({label, value}, index) => (
          <option
            key={index} 
            value={value}
          >
            {label}
          </option>
        ))
      }
    </select>
  );
}
