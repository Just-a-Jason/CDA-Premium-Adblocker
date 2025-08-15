import {
  EXT_NAME,
  CDA_AD_CONTAINER_CLASS,
  CDA_PLAYER_CLASS,
} from "../constants";
import { Nullable } from "../types";
import { skip_ad } from "./core";

let cda_movie_player_ref: Nullable<HTMLVideoElement> = null;
export let cda_player_state: boolean = false;

export function link_observer_to_ad_container() {
  cda_movie_player_ref = document.querySelector(CDA_PLAYER_CLASS);

  const ad_container: Nullable<HTMLDivElement> = document.querySelector(
    CDA_AD_CONTAINER_CLASS
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
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if ((node as HTMLElement).tagName === "VIDEO") {
          node.addEventListener("loadedmetadata", () => {
            skip_ad(node as HTMLVideoElement);
          });
        }
      }
    });
  });
});
