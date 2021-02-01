import styles from "../styles/SocialIcons.module.css";

export default ({ social }) => (
  <ul className="social-icons">
    {social.map((elem) => (
      <li key={elem.tag}>
        <a
          className={styles[elem.tag]}
          href={`${elem.base_url}/${elem.username}`}
          title={elem.name}
        >
          {elem.name}
        </a>
      </li>
    ))}
  </ul>
);
