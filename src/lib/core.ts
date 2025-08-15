import {
  EXT_NAME,
  CDA_AD_PLAYER_CLASS,
  CDA_VIDEO_NAME_CLASS,
} from "../constants";
import { type Nullable, type UInt64 } from "../types";

let ad_skip_counter: UInt64 = 0;

export function skip_ad(player: HTMLVideoElement): void {
  if (isNaN(player.duration)) {
    return;
  }

  player.currentTime = player.duration;

  if (player.paused) {
    player.play();
  }

  ad_skip_counter++;
  log_to_console();
}

export function try_to_skip_preloaded_ad() {
  const ad_player: Nullable<HTMLVideoElement> =
    document.querySelector(CDA_AD_PLAYER_CLASS);

  if (ad_player !== null) {
    skip_ad(ad_player);
  }
}

export function log_cda_movie_title(): void {
  const title: Nullable<HTMLSpanElement> =
    document.querySelector(CDA_VIDEO_NAME_CLASS);

  const cda_title: string =
    title === null ? "Unknown title" : title!.textContent.trim();

  console.info(
    `%c[LOG]%c[${EXT_NAME}]%c Now watching: ${cda_title}`,
    "color: cyan;",
    "color: yellow;",
    "color: cyan;"
  );
}

function log_to_console(): void {
  console.info(
    `%c[LOG]%c[${EXT_NAME}]%c Skiping a CDA ad... ⏩`,
    "color: cyan;",
    "color: yellow;",
    "color: cyan;"
  );
  console.log(
    `%c[LOG]%c[${EXT_NAME}]%c Skipped %c${ad_skip_counter}%c ad(s) so far. 🗑️`,
    "color: cyan;",
    "color: yellow;",
    "color: cyan;",
    "color: yellow;",
    "color: cyan;"
  );
}
