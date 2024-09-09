import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  }
}>;

const Header = (props: Props) => {
  return (
    <header>
      <img {...props.image} />
      {props.children}
    </header>
  );
};

export default Header;
