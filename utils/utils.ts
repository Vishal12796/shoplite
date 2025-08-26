export const getNumColumns = (width: number): number => {
  // Define layout breakpoints
  const MOBILE_BREAKPOINT = 768; // px

  return width >= MOBILE_BREAKPOINT ? 2 : 1;
};

export const DEFAULT_CURRENCY: string = "$";
