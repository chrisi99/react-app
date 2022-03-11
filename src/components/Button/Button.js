import styles from './Button.module.scss';

const button = props => {
  return <button className={styles.button} type="button">{props.text}</button>
}

export default button;