import styles from "./Container.module.scss";

const container = props => {
  return <div className={styles.container}>
    {props.children}
  </div>
}

export default container;