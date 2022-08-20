import type { ReactElement } from "react";

import styles from "./styles.module.css";

type SocialNetwork = "linkedin" | "twitter" | "gitlab" | "github";

export interface SocialIconProps {
  tag: SocialNetwork;
  username: string;
  name: string;
}

const link = (social: SocialNetwork, username: string): string => {
  const urls = {
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    linkedin: "https://linkedin.com/in",
    twitter: "https://twitter.com",
  };

  return `${urls[social]}/${username}`;
};

const SocialIcon = ({ tag, username, name }: SocialIconProps): ReactElement => (
  <a className={styles[tag]} target="_blank" href={link(tag, username)} title={name}>
    {name}
  </a>
);

export default SocialIcon;
