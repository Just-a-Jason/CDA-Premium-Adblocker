import { skip_ad } from "./core";

export const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if ((node as any).tagName === "VIDEO") {
          node.addEventListener("loadedmetadata", () => {
            skip_ad(node as HTMLVideoElement);
          });
        }
      }
    });
  });
});
