import { css } from "styled-components";

// COLOR PALLET
export const COLORS = {
  // BLUE
  PRIMARY       : "#2196f3",
  PRIMARY_DARK  : "#1769aa",
  PRIMARY_LIGHT : "#4dabf5",

  // ORANGE
  SECONDARY       : "#f50057",
  SECONDARY_DARK  : "#ab003c",
  SECONDARY_LIGHT : "#f73378",

  ORANGE_DARK   : "#f78035",
  ORANGE_LIGHT  : "#FAA637",

  //CYAN
  TERTIARY      : "#3A82A7",
  TERTIARY_LIGHT: "#92abbd",

  //RED
  DANGER  : "#d32f2f",

  GREY_TEXT_COLOR : "#707070"
};

// BREAKPOINTS
export const BREAKPOINTS_VALUE = {
  DISPLAY : 1750,
  DESKTOP : 1450, // x_large
  LAPTOP  : 1278, // large
  TABLET  : 960, // medium
  PHABLET : 600, // small
  MOBILE  : 450 // x_small
}
export const BREAKPOINTS = {
  A_DESKTOP : `${BREAKPOINTS_VALUE.DESKTOP}px`,
  A_LAPTOP  : `${BREAKPOINTS_VALUE.LAPTOP}px`,
  A_TABLET  : `${BREAKPOINTS_VALUE.TABLET}px`,
  A_PHABLET : `${BREAKPOINTS_VALUE.PHABLET}px`,
  A_MOBILE  : `${BREAKPOINTS_VALUE.MOBILE}px`,

  DISPLAY : `${BREAKPOINTS_VALUE.DISPLAY - 1}px`,
  DESKTOP : `${BREAKPOINTS_VALUE.DESKTOP - 1}px`, // x_large
  LAPTOP  : `${BREAKPOINTS_VALUE.LAPTOP - 1}px`, // large
  TABLET  : `${BREAKPOINTS_VALUE.TABLET - 1}px`, // medium
  PHABLET : `${BREAKPOINTS_VALUE.PHABLET - 1}px`, // small
  MOBILE  : `${BREAKPOINTS_VALUE.MOBILE - 1}px` // x_small
};

//Fonts

export const FONTS = {
  PRIMARY         : "Roboto, sans-serif",
  // PRIMARY_BOLD    : "Gotham Bold",
  PRIMARY_LIGHT   : "Didact Gothic, sans-serif",
  // PRIMARY_MEDIUM  : "Gotham Medium",
  PRIMARY_ITALIC  : "La Belle Aurore,cursive",

  // SECONDARY         : "PolarisCondensed-Book",
  // SECONDARY_MEDIUM  : "PolarisCondensed-Medium",
  // SECONDARY_HEAVY   : "PolarisCondensed-Heavy"
};

export const responsive = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
