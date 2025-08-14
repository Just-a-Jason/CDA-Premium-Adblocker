import { EXT_NAME } from "../constants";
import { type Int } from "../types";

let ad_skip_counter: Int = 0;

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
