import { TARGET_AD_PLAYER_CLASS } from "../constants";
import { type Nullable } from "../types";
import { skip_ad } from "./core";

export const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node instanceof HTMLElement) {
        const ad_video_player: Nullable<HTMLVideoElement> = node.querySelector(
          TARGET_AD_PLAYER_CLASS
        );

        if (ad_video_player !== null) {
          // Skip the annoying ad...
          skip_ad(ad_video_player);
        }
      }
    }
  }
});
