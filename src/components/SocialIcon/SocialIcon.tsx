import { cloneElement, type ReactElement } from "react";
import { GitHub, Gitlab, Linkedin, Twitter } from "react-feather";

import styles from "./styles.module.css";

type SocialNetwork = "linkedin" | "twitter" | "gitlab" | "github";

export interface SocialIconProps {
  tag: SocialNetwork;
  username: string;
  name: string;
}

const link = (social: SocialNetwork, username: string): string => {
  const urls: Record<SocialNetwork, string> = {
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    linkedin: "https://linkedin.com/in",
    twitter: "https://twitter.com",
  };

  return `${urls[social]}/${username}`;
};

const SocialIcon = ({ tag, username, name }: SocialIconProps): ReactElement => {
  const icons: Record<SocialNetwork, ReactElement> = {
    github: <GitHub />,
    gitlab: <Gitlab />,
    linkedin: <Linkedin />,
    twitter: <Twitter />,
  };

  return (
    <a
      className={styles.icon}
      target="_blank"
      rel="noopener noreferrer"
      href={link(tag, username)}
      aria-label={`${username} on ${name}`}
      title={name}
    >
      {cloneElement(icons[tag], { className: styles.feather })}
    </a>
  );
};

export default SocialIcon;
