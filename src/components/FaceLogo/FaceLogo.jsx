import styles from "../FaceLogo/faceLogo.module.scss";

export default function FaceLogo(props) {
  return (
    <div className={styles.svgContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g id="Layer_2">
          <g id="face" className={styles.face}>
            <circle id="head" className={styles.acentColor} cx="50" cy="49.5" r="45" />
            <path id="mouth" className={styles.bgColor} d="M25.7,55.8s25.2,3.6,49.47,0c.93,8.1,.93,18.9-24.73,20.53-24.73,.17-24.73-20.53-24.73-20.53Z" />
            <rect id="right" className={styles.bgColor} x="56.75" y="32.85" width="22.5" height="16.2" rx="8.1" ry="8.1" transform="translate(27.05 108.95) rotate(-90)" />
            <rect id="left" className={styles.bgColor} x="23.9" y="34.2" width="19.8" height="16.2" rx="7.6" ry="7.6" transform="translate(-8.5 76.1) rotate(-90)" />
            <rect className={`${styles.acentColor} ${styles.leftTop}`} x="23.9" y="13.5" width="19.8" height="16.2" rx="7.6" ry="7.6" transform="translate(12.2 55.4) rotate(-90)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
