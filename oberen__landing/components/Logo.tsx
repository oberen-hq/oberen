import { jsx } from "theme-ui";
import { Link } from "./Link";

const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    img: {
      height: "auto",
      width: [128, null, "100%"],
    },
  },
};

export default function Logo({ ...props }) {
  return (
    //@ts-ignore
    <Link path="/" sx={styles.logo} {...props}>
      <img src="/assets/vector.png" />
    </Link>
  );
}
