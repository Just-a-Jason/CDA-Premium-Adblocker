import {
  EXT_NAME,
  CDA_AD_PLAYER_CLASS,
  CDA_VIDEO_CONTAINER_NAME_CLASS,
} from "../constants";
import { type Nullable, type UInt64 } from "../types";
import { update_counter } from "./gui";

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
  update_counter(ad_skip_counter);
}

export function try_to_skip_preloaded_ad() {
  const ad_player: Nullable<HTMLVideoElement> =
    document.querySelector(CDA_AD_PLAYER_CLASS);

  if (ad_player !== null) {
    skip_ad(ad_player);
  }
}

export function log_cda_movie_title(): void {
  const title: Nullable<HTMLSpanElement> = document.querySelector(
    CDA_VIDEO_CONTAINER_NAME_CLASS
  );

  const cda_title: string =
    title === null ? "Unknown title " : title!.textContent.trim() + " ";

  if (title !== null) {
    const a = document.createElement("a");
    a.textContent = "(Github: CDA Premium Adblocker)";
    a.href = "https://github.com/Just-a-Jason/CDA-Premium-Adblocker/";

    const h1 = document.createElement("h1");
    h1.textContent = cda_title;

    a.style = "color: #ffb100; font-weight: bold; font-size: 16px;";

    title.appendChild(h1);
    title.appendChild(a);
  }

  console.info(
    `%c[LOG]%c[${EXT_NAME}]%c Now watching: ${cda_title}`,
    "color: cyan;",
    "color: yellow;",
    "color: #ffb100;"
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
