import { Link, useLocation } from "react-router-dom";

import { VscDebugStepBack } from "react-icons/vsc";
import css from "./Back.module.css";

const BackLink = ({ children }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Link to={backLinkHref} className={css.button_back_page}>
      <VscDebugStepBack style={{ fontSize: "14px", marginRight: "10px" }} />
      {children}
    </Link>
  );
};

export default BackLink;
