export const getSlugFromPath = (path: string): string => {
  return path.split('/').at(-2) ?? '';
};
