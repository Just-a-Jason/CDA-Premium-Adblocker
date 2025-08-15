import { log_cda_movie_title, try_to_skip_preloaded_ad } from "./lib/core";
import { init_gui } from "./lib/gui";
import { link_observer_to_ad_container } from "./lib/observer";

function main() {
  // Initialize the gui.
  log_cda_movie_title();
  init_gui();

  // Might work if an ad is already loaded.
  try_to_skip_preloaded_ad();
  link_observer_to_ad_container();
}

main();
