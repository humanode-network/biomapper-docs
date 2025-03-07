import React, { PropsWithChildren } from "react";

type Props = {
  condition: boolean;
};

const If: React.FC<PropsWithChildren<Props>> = ({ condition, children }) =>
  condition ? <>{children}</> : <></>;

export default If;
