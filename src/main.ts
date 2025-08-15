import { log_cda_movie_title, try_to_skip_preloaded_ad } from "./lib/core";
import { link_observer_to_ad_container } from "./lib/observer";

function main() {
  // Might work if an ad is already loaded.
  try_to_skip_preloaded_ad();
  log_cda_movie_title();
  link_observer_to_ad_container();
}

main();
