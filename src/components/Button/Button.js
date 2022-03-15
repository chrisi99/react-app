import styles from './Button.module.scss';

const button = props => {
  return (
    <button className={styles.button} type="button">{props.children}</button>
  );
}

export default button;