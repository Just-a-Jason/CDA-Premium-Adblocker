import { UInt64, type Nullable } from "../types";
import { EXT_NAME } from "../constants";

let ad_counter_ui: Nullable<HTMLHeadingElement>;

export function init_gui(): void {
  const container: Nullable<HTMLDivElement> =
    document.querySelector(".first-top");

  if (container !== null) {
    container.style = `
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 10px;
    `;

    ad_counter_ui = document.createElement("h3");
    ad_counter_ui.style = "color: white;";
    container.appendChild(ad_counter_ui);
  }
}

export function update_counter(count: UInt64): void {
  if (count < 0) {
    count = 0;
  }

  if (ad_counter_ui !== null) {
    ad_counter_ui.textContent =
      ad_counter_ui.textContent = `Pominięto ${count} reklam(y)`;
  }
}
