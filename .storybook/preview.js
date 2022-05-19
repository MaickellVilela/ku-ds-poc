import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import isChromatic from "chromatic/isChromatic";
setCompodocJson(docJson);

// Use the document.fonts API to check if fonts have loaded
// https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts API to
const fontLoader = async () => ({
  // fonts: await Promise.all([document.fonts.load('400 1em Font Name')]),
  // or
  fonts: await document.fonts.ready,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};

/* 👇 It's configured as a global loader
 * See https://storybook.js.org/docs/react/writing-stories/loaders
 * to learn more about loaders
 */
export const loaders = isChromatic() && document.fonts ? [fontLoader] : [];
