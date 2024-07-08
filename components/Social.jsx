import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/minuszero-01" },
  {
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/in/harsh-hande-8bb20a244",
  },
  { icon: <FaTwitter />, path: "https://twitter.com/hande_harsh_10" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
