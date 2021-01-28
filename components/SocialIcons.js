import styles from '../styles/SocialIcons.module.css'

const SocialIcons = ({ twitter, linkedin, github, gitlab }) => (
  <ul className="social-icons">
    { twitter && <li><a className={styles.twitter} href={`https://twitter.com/${twitter}`} title="Twitter" >Twitter</a></li>}
    { linkedin && <li><a className={styles.linkedin} href={`https://linkedin.com/in/${linkedin}`} title="LinkedIn" >LinkedIn</a></li>}
    { github && <li><a className={styles.github} href={`https://github.com/${github}`} title="GitHub" >GitHub</a></li>}
    { gitlab && <li><a className={styles.gitlab} href={`https://gitlab.com/${gitlab}`} title="GitLab" >GitLab</a></li>}
  </ul>
)

export default SocialIcons
