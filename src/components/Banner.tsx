import Image from "next/image";
import banner from "../assets/banner.png";

const Banner: React.FC = () => (
  <Image
    alt=""
    src={banner}
    decoding="async"
    style={{
      display: "block",
      maxHeight: "64px",
      objectFit: "cover",
      objectPosition: "50% 45%",
    }}
  />
);

export default Banner;
