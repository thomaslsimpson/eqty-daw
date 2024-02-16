import Image from "next/image";
import styles from "./DAW.module.css";
import DAWCarrier from "./DAWCarrier.js";
import DAWFooter from "./DAWFooter.js";
import DAWLCD from "./DAWLCD.js";
import DAWButton from "./DAWButton.js";

import apptekImage from "./assets/AppTekLogo.png";
import deluxeImage from "./assets/deluxe-logo.png";

import svg_daw_speaker from "./assets/daw_speaker.svg";

function DAWHeader(){
  return (
      <div className={styles.header}>
        <div className={styles.upper}>
          <Image src={apptekImage} width="83" height="28" alt="AppTek Logo 2" className={styles.apptekLogo} />
        </div>
        <div className={styles.lower}>
          <div className={styles.headerLeft}>
            <Image src={deluxeImage} width="125" height="40" alt="Deluxe Logo" className={styles.deluxeLogo} />
            <div className={styles.headerLeftTitle}>Voice Modifier/Translator</div>
          </div>

          <div className={styles.headerSpeaker}>
            <Image src={svg_daw_speaker} width="204" height="68" alt="Speaker" className={styles.headerSpeakerSVG} />
          </div>
        </div>
      </div>
  );
}


function DAWButtonPanel(){
  return (
      <div className={styles.buttonPanel}>
        <DAWButton label="Upload" />
        <DAWButton label="Eject" />
        <DAWCarrier />
        <DAWButton label="Eject" />
        <DAWButton label="Export" />
      </div>
  );
}


/* main */
export default function DAW(){
  return (
    <main className={styles.main}>
      <DAWHeader />
      <DAWLCD />
      <DAWButtonPanel />
      <DAWFooter />
    </main>
  );
}

