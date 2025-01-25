import { Cards } from "nextra/components";

type Props = {
  title: string;
  href: string;
  icon: React.ReactElement;
};

const Embed: React.FC<Props> = ({ href, title, icon }) => (
  <Cards>
    <Cards.Card title={title} href={href} icon={icon} children={null} />
  </Cards>
);

export default Embed;
