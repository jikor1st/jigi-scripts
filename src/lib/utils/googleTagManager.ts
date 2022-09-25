export const changeRouteGtag = (url: string) => {
  if (typeof window !== 'undefined') {
    (<any>window).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};
