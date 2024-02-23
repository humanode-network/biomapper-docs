import { Card, Cards } from "nextra/components";

type Props = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const Embed: React.FC<Props> = ({ href, title, icon }) => (
  <Cards>
    <Card title={title} href={href} icon={icon} children={null} />
  </Cards>
);

export default Embed;
