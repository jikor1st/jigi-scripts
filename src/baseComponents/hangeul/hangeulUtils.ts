const checkEmpty = (options: any): boolean => options && options !== '';
export const cssGenerator = (
  property: any,
  css: { [key: string]: string | number | undefined },
) => (checkEmpty(property) ? css : {});
