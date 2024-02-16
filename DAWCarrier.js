import Image from "next/image";
import styles from "./DAWCarrier.module.css";
import svg_aiButton from "./assets/ai_button.svg";
import svg_carrierOutline from "./assets/carrier_outline.svg";
import svg_carrierButtonPlayUp from "./assets/carrier_button_play_up.svg";
import svg_carrierButtonPlayDown from "./assets/carrier_button_play_down.svg";
import svg_carrierButtonPauseUp from "./assets/carrier_button_pause_up.svg";
import svg_carrierButtonPauseDown from "./assets/carrier_button_pause_down.svg";
import svg_carrierButtonStopUp from "./assets/carrier_button_stop_up.svg";
import svg_carrierButtonStopDown from "./assets/carrier_button_stop_down.svg";
import svg_carrierAILeftInactive from "./assets/carrier_ai_left_inactive.svg";
import svg_carrierAIRightInactive from "./assets/carrier_ai_right_inactive.svg";
import svg_carrierAILeftActive from "./assets/carrier_ai_left_active.svg";
import svg_carrierAIRightActive from "./assets/carrier_ai_right_active.svg";

function DAWCarrierActiveButton(){
  return (
      <div className={styles.carrierActiveButton}>
        AB
      </div>
  );
}

function DAWCarrierActiveIndicatorLight(){
  return (
      <div className={styles.carrierActiveIndicatorLight}>
        <Image src={svg_aiButton} width="10" height="10" alt="Active" className={styles.activeIndicatorButton} />
      </div> 
  );
}

function orig_DAWCarrierActiveIndicatorLight(){
  return (
      <div className={styles.carrierActiveIndicatorLight}>
        <div className={styles.carrierActiveIndicatorLightBG}>
          <div className={styles.carrierActiveIndicatorLightFG}>
          </div>
        </div>
      </div>
  );
}

function DAWLeftActiveIndicator(){
  return (
      <div className={styles.leftActiveIndicator}>
        <Image src={svg_carrierAILeftInactive} width="160" height="27" alt="Active" className={styles.activeIndicatorButton} />
      </div>
  );
}

function DAWRightActiveIndicator(){
  return (
      <div className={styles.rightActiveIndicator}>
        <Image src={svg_carrierAIRightActive} width="160" height="27" alt="Active" className={styles.activeIndicatorButton} />
      </div>
  );
}

function DAWCarrierControlButton({up, down, buttonClassName}){
  const buttonStyles= `${styles.carrierControlButton} ${buttonClassName}`;
  return (
      <div className={buttonStyles}>
          <Image src={down} width="40" height="40" alt="Carrier" className={styles.carrierButton} />
      </div>
  );
}

function DAWCarrierControls(){
  return (
      <div className={styles.carrierControls}>
        <div className={styles.carrierOutlineBackground}>
          <Image src={svg_carrierOutline} width="310" height="48" alt="Carrier" className={styles.carrierControlOutline} />
        </div>
        <DAWCarrierControlButton up={svg_carrierButtonPlayUp} down={svg_carrierButtonPlayDown} buttonClassName={styles.carrierButtonPlay} />
        <DAWCarrierControlButton up={svg_carrierButtonPauseUp} down={svg_carrierButtonPauseDown} buttonClassName={styles.carrierButtonPause} />
        <DAWCarrierControlButton up={svg_carrierButtonStopUp} down={svg_carrierButtonStopDown} buttonClassName={styles.carrierButtonStop} />
      </div>
  );
}

export default function DAWCarrier(){
  return (
      <div className={styles.carrier}>
        <DAWLeftActiveIndicator />
        <DAWCarrierControls/>
        <DAWRightActiveIndicator />
      </div>
  );
}

