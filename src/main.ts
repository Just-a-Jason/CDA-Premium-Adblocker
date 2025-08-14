import {
  EXT_NAME,
  TARGET_AD_PLAYER_CLASS,
  TARGET_CONTAINER_CLASS,
} from "./constants";
import { skip_ad } from "./lib/core";
import { observer } from "./lib/observer";
import { type Nullable } from "./types";

const ad_container: Nullable<HTMLDivElement> = document.querySelector(
  TARGET_CONTAINER_CLASS
);

if (ad_container !== null) {
  observer.observe(ad_container, {
    childList: true,
    subtree: true,
    attributes: true,
  });

  const ad: Nullable<HTMLVideoElement> = ad_container.querySelector("video");

  if (ad !== null) {
    ad.addEventListener("loadedmetadata", () => {
      skip_ad(ad);
    });
  }
}

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
