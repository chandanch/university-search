export const urlBuilder = (url: string, resourcepaths: Array<string>) => {
  return `${url}/${resourcepaths.join('/')}`;
};
