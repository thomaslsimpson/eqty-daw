import Image from "next/image";
import styles from "./DAWFooter.module.css";

/* Footer */
function DAWFooterStatus(){
  return (
      <div className={styles.footerStatus}>
        Status
      </div>
  );
}

function DAWFooterLogo(){
  return (
      <div className={styles.footerLogo}>
        EQTYLogo2
      </div>
  );
}

export default function DAWFooter(){
  return (
      <div className={styles.footer}>
        <DAWFooterStatus />
        <div className={styles.footerSpacer} />
        <DAWFooterLogo />
        <div className={styles.footerGlass} />
      </div>
  );
}

