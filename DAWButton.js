import Image from "next/image";
import styles from "./DAWButton.module.css";

export default function DAWButton({label}){
  return (
      <div className={styles.buttonPanelButton}>
        <div className={styles.buttonPanelButtonBG}>
          <div className={styles.buttonPanelButtonFGEdge}>
            <div className={styles.buttonPanelButtonFG}>
              <div className={styles.buttonPanelButtonText}>
                {label}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

