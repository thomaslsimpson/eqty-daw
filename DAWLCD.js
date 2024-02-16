import Image from "next/image";
import styles from "./DAWLCD.module.css";

export default function DAWLCD(){
  return (
      <div className={styles.lcd}>
        LCD
      </div>
  );
}


function DAWButton({label}){
  return (
      <div className={styles.buttonPanelButton}>
        {label}
      </div>
  );
}

