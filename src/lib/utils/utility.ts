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

const getRandomColor = (len?: number) => {
  len = len || 6;
  const hex = '0123456789ABCDEF';
  let output = '';
  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return `#${output}`;
};
const getInvertColor = (hex: string) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + r.padStart(2) + g.padStart(2) + b.padStart(2);
};

const clipboard = (function () {
  let textArea: HTMLTextAreaElement | null = null;
  let copy = null;

  function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
  }

  function createTextArea(text: string) {
    textArea = document.createElement('textArea') as HTMLTextAreaElement;
    textArea.value = text;
    document.body.appendChild(textArea);
  }

  function selectText() {
    if (!textArea) return;
    let range: Range | null = null;
    let selection: Selection | null = null;

    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  function copyToClipboard() {
    document.execCommand('copy');
    if (textArea) document.body.removeChild(textArea);
  }

  copy = function (text: string) {
    createTextArea(text);
    selectText();
    copyToClipboard();
  };

  return {
    copy: copy,
  };
})();

const utility = {
  getRandom,
  getType,
  getQueryParams,
  getRandomColor,
  getInvertColor,
  // tools
  clipboard,
};

export { utility };
