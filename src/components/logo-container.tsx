import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/svg/logo.svg"
        alt="PrepAI"
        className="w-40 h-auto object-contain"
      />
    </Link>
  );
};
