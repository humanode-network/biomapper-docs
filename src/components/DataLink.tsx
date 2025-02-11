import { PropsWithChildren } from "react";
import links, { Link } from "../data/links";
import { A } from "./mdx";
import React from "react";

type Props = { link: Link };

const DataLink: React.FC<PropsWithChildren<Props>> = ({ children, link }) => {
  // In case type-checks fail us, which happens often with mdx.
  if (!(link in links)) throw new Error(`unknown link "${link}"`);

  return <A href={links[link]}>{children}</A>;
};

export default DataLink;
