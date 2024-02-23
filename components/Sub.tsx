type Props = {};

const Sub: React.FC<React.PropsWithChildren<Props>> = ({ children }) => (
  <span style={{ fontSize: "1em" }}>{children}</span>
);

export default Sub;
