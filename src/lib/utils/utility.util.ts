const getRandom = () => {};

function getType(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

const utility = { getRandom, getType };

export { utility };
