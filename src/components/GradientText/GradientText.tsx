import type { ReactElement } from "react";

import styles from "./styles.module.css";

interface GradientTextProps {
  children: string;
}

const GradientText = ({ children }: GradientTextProps): ReactElement => (
  <span className={styles.text}>{children}</span>
);

export default GradientText;
