const getRandom = () => {};

const getType = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1);
};

const getQueryParams = (url: URL) => {
  // const params = {};
  // const idx = url.indexOf('?') + 1;
  // const fromIdx = url.slice(idx);
  // fromIdx.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
  //   params[$1] = $3;
  // });
  // return params;
};

const utility = { getRandom, getType, getQueryParams };

export { utility };
