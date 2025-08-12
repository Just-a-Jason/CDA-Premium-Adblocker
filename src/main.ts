import { EXT_NAME, TARGET_AD_PLAYER_CLASS } from "./constants";
import { skip_ad } from "./lib/core";
import { observer } from "./lib/observer";
import { type Nullable } from "./types";

observer.observe(document.body, { childList: true, subtree: true });

function main() {
  console.info(
    `%c[LOG]%c[${EXT_NAME}] %c ${EXT_NAME} has been initialized in background.`,
    "color: cyan;",
    "color: yellow;",
    "color: green;"
  );

  const ad_player: Nullable<HTMLVideoElement> = document.querySelector(
    TARGET_AD_PLAYER_CLASS
  );

  if (ad_player !== null) {
    skip_ad(ad_player);
  }
}

main();
