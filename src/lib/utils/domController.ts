type RectMethod = 'offset' | 'client' | 'getBoundingClientRect';

const getRectWithMethod = (target: HTMLElement, method: RectMethod) => {
  let width: number = 0;
  let height: number = 0;

  const { offsetWidth, offsetHeight, clientWidth, clientHeight } =
    target as HTMLElement;

  switch (method) {
    case 'offset':
      width = offsetWidth;
      height = offsetHeight;
      break;
    case 'client':
      width = clientWidth;
      height = clientHeight;
      break;
    case 'getBoundingClientRect':
      const { width: boundingWidth, height: boundingHeight } =
        target.getBoundingClientRect();
      width = boundingWidth;
      height = boundingHeight;
      break;
    default:
      width = offsetWidth;
      height = offsetHeight;
      break;
  }

  return { width, height };
};

const domController = { getRectWithMethod };

export { domController };
export type { RectMethod };
