/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import logo from "../../../../../static/images/logo.png";

export const Logo = () => (
  <Link to="/">
    <div sx={{ height: "25px", overflow: "hidden" }}>
      <img sx={{ width: "auto", height: "25px" }} src={logo} />
    </div>
  </Link>
);
