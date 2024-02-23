import Image from "next/image";

type Props = {
  src: string;
};

const Banner: React.FC<Props> = ({ src }) => (
  <Image
    alt=""
    src={src}
    decoding="async"
    style={{
      display: "block",
      objectFit: "cover",
    }}
  />
);

export default Banner;
