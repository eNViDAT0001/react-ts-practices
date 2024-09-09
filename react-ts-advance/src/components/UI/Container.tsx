import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type Props<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>

const Container = <C extends ElementType>({as, children, ...props}: Props<C>) => {
  const Component = as || 'div';
  return (
    <Component className="container" {...props}>{children}</Component>
  )
}

export default Container;
