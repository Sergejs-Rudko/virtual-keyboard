import Key from './key.js';

const keys = document.querySelectorAll('.key');
const textArea = document.querySelector('.screen');
const keyboard = document.querySelector('.keyboard');
const keyBoardKeys = document.querySelector('.keyboard__keys');

let virtualKeyboard = {
  shiftDown: false,
  keySetup: [
    {
      value: '1',
      shiftValue: '!',
      code: 'Digit1',
      isPressed: false,
    },
    {
      value: '2',
      shiftValue: '@',
      code: 'Digit2',
      isPressed: false,
    },
    {
      value: '3',
      shiftValue: '#',
      code: 'Digit3',
      isPressed: false,
    },
  ],
  renderKeyboard() {
    this.keySetup.forEach((el) => {
      const key = new Key(this.shiftDown, el.value, el.shiftValue, el.isPressed).createKey();
      key.addEventListener('click', (e) => {
        const text = e.target.innerText;
        textArea.value += text;
      });
      keyBoardKeys.append(key);
      keyboard.append(keyBoardKeys);
    });
  },
  rerenderKeyboard() {
    keyBoardKeys.innerHTML = '';
    keyboard.removeChild(keyBoardKeys);
    this.renderKeyboard();
  },
};

virtualKeyboard.renderKeyboard();

document.addEventListener('keydown', (e) => {
  if (e.code.includes('Shift') && !e.repeat) {
    virtualKeyboard = { ...virtualKeyboard, shiftDown: !virtualKeyboard.shiftDown };
    virtualKeyboard.rerenderKeyboard();
  }
});
document.addEventListener('keyup', (e) => {
  if (e.code.includes('Shift') && !e.repeat) {
    virtualKeyboard = { ...virtualKeyboard, shiftDown: !virtualKeyboard.shiftDown };
    virtualKeyboard.rerenderKeyboard();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key.length === 1) {
    textArea.value += e.key;
  }
  virtualKeyboard.keySetup = virtualKeyboard.keySetup.map((key) => {
    if (key.code === e.code) {
      return { ...key, isPressed: true };
    }
    return key;
  });
  console.log(e);
  virtualKeyboard.rerenderKeyboard();
});
document.addEventListener('keyup', (e) => {
  virtualKeyboard.keySetup = virtualKeyboard.keySetup.map((key) => {
    if (key.code === e.code) {
      return { ...key, isPressed: false };
    }
    return key;
  });
  virtualKeyboard.rerenderKeyboard();
});
