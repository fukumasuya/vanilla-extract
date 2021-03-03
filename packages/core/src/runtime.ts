import { generateCss } from './generateCss';
import type { Adapter, CSS } from './types';

let styleSheet: CSSStyleSheet | null;

function getStylesheet() {
  if (styleSheet) {
    return styleSheet;
  }
  const styleEl = document.createElement('style');
  document.head.appendChild(styleEl);
  styleSheet = styleEl.sheet;

  return styleSheet;
}

export const browserRuntimeAdapter: Adapter = {
  appendCss: (cssObj: CSS) => {
    const css = generateCss(cssObj);

    for (const rule of css) {
      getStylesheet()?.insertRule(rule);
    }
  },
};