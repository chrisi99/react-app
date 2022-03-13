import styles from './Column.module.scss';

const column = props => {
  return <article className={styles.column}>
  <h2 className={styles.title}>{props.title}</h2>
</article>
}

export default column;