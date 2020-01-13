import React from "react";
import styles from "./Error.module.css";

function Error() {
  return (
    <main className={styles.wrapper}>
      <svg
        width="145"
        height="140"
        viewBox="0 0 145 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path
          d="M0.753468 44.9548L9.83019 52.0467L1.28727 68.4121C-2.98407 75.9585 4.35383 83.3096 9.02913 85.8687C13.6317 88.3877 20.7753 88.6872 27.4493 88.5964L39.4626 68.9577L48.5393 73.8673L32.7885 44.6823L0.753468 44.9548ZM2.08808 85.016L21.5761 121.02C25.4916 126.02 32.8776 127.202 40.5304 127.021H61.0863V92.9261L22.1102 92.6534C16.0593 93.0166 8.13923 91.7438 2.08808 85.016ZM124.697 18.6647L114.094 23.1652L103.922 7.75963C99.3933 0.365343 89.4058 3.21914 84.9013 6.06773C80.467 8.87201 76.7415 14.9748 73.5854 20.8561L84.9376 40.8841L76.243 46.4424L109.405 46.8158L124.697 18.6647ZM89.012 0.410359L48.0742 0C41.8025 1.00007 37.1878 6.88679 33.6367 13.6686L23.6711 31.6472L53.4911 48.1767L72.6256 14.2195C75.2411 8.75047 80.1941 2.44083 89.012 0.410359ZM90.7928 139.336L91.9969 127.88L110.403 126.452C119.065 126.076 121.411 115.957 121.104 110.636C120.801 105.398 117.27 99.1812 113.656 93.5696L90.6352 93.7887L89.9887 83.4894L73.5849 112.312L90.7928 139.336ZM124.059 116.975L144.265 81.3687C146.431 75.3984 143.52 68.5082 139.31 62.1145L128.417 44.682L99.5028 62.7495L119.926 95.9478C123.441 100.887 126.558 108.277 124.059 116.975Z"
          fill="white"
          fillOpacity="0.2"
        />
      </svg>
      <div className={styles.texts}>
        <h2 className={styles.minititle}>Something Went Wrong.</h2>
        <p className={styles.paragraph}>Let's try a few solutions:</p>
        <p className={styles.paragraph}>1. Reload your browser</p>
        <p className={styles.paragraph}>2. Try the link again</p>
        <p className={styles.paragraph}>
          3. Connect with support at simcase.help
        </p>
      </div>
    </main>
  );
}

export default Error;
