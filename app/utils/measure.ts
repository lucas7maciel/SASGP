export const pixelsToRem = (pixels: number): number => {
  if (!document || !document.documentElement) {
    return pixels * 16;
  }

  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize || "16px"
  );

  return parseFloat((pixels / rootFontSize).toFixed(4));
};

export const remToPixels = (rem: number) => {
  if (!document || !document.documentElement) {
    return rem * 16;
  }

  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize || "16px"
  );

  return rem * rootFontSize;
};
