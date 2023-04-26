import Key from './key.js';

const keys = document.querySelectorAll('.key');
const textArea = document.querySelector('.screen');
const keyboard = document.querySelector('.keyboard');
const keyBoardKeys = document.querySelector('.keyboard__keys');

let virtualKeyboard = {
  shiftDown: false,
  primaryLanguage: true,
  keySetup: [
    [
      {
        value: '`',
        shiftValue: '~',
        secondaryValue: 'ё',
        secondaryShiftValue: 'Ё',
        code: 'Backquote',
        isPressed: false,
      },
      {
        value: '1',
        shiftValue: '!',
        secondaryValue: '1',
        secondaryShiftValue: '!',
        code: 'Digit1',
        isPressed: false,
      },
      {
        value: '2',
        shiftValue: '@',
        secondaryValue: '2',
        secondaryShiftValue: '"',
        code: 'Digit2',
        isPressed: false,
      },
      {
        value: '3',
        shiftValue: '#',
        secondaryValue: '3',
        secondaryShiftValue: '№',
        code: 'Digit3',
        isPressed: false,
      },
      {
        value: '4',
        shiftValue: '$',
        secondaryValue: '4',
        secondaryShiftValue: ';',
        code: 'Digit4',
        isPressed: false,
      },
      {
        value: '5',
        shiftValue: '%',
        secondaryValue: '5',
        secondaryShiftValue: '%',
        code: 'Digit5',
        isPressed: false,
      },
      {
        value: '6',
        shiftValue: '^',
        secondaryValue: '6',
        secondaryShiftValue: '^',
        code: 'Digit6',
        isPressed: false,
      },
      {
        value: '7',
        shiftValue: '&',
        secondaryValue: '7',
        secondaryShiftValue: '?',
        code: 'Digit7',
        isPressed: false,
      },
      {
        value: '8',
        shiftValue: '*',
        secondaryValue: '8',
        secondaryShiftValue: '*',
        code: 'Digit8',
        isPressed: false,
      },
      {
        value: '9',
        shiftValue: '(',
        secondaryValue: '9',
        secondaryShiftValue: '(',
        code: 'Digit9',
        isPressed: false,
      },
      {
        value: '0',
        shiftValue: ')',
        secondaryValue: '0',
        secondaryShiftValue: ')',
        code: 'Digit0',
        isPressed: false,
      },
      {
        value: '-',
        shiftValue: '_',
        secondaryValue: '-',
        secondaryShiftValue: '_',
        code: 'Minus',
        isPressed: false,
      },
      {
        value: '=',
        shiftValue: '+',
        secondaryValue: '=',
        secondaryShiftValue: '+',
        code: 'Equal',
        isPressed: false,
      },
      {
        value: 'BACK',
        shiftValue: 'BACK',
        secondaryValue: 'BACK',
        secondaryShiftValue: 'BACK',
        code: 'Backspace',
        isPressed: false,
      },
    ],
    [
      {
        value: 'TAB',
        shiftValue: 'TAB',
        secondaryValue: 'TAB',
        secondaryShiftValue: 'TAB',
        code: 'Tab',
        isPressed: false,
      },
      {
        value: 'q',
        shiftValue: 'Q',
        secondaryValue: 'й',
        secondaryShiftValue: 'Й',
        code: 'KeyQ',
        isPressed: false,
      },
      {
        value: 'w',
        shiftValue: 'W',
        secondaryValue: 'ц',
        secondaryShiftValue: 'Ц',
        code: 'KeyW',
        isPressed: false,
      },
      {
        value: 'e',
        shiftValue: 'E',
        secondaryValue: 'у',
        secondaryShiftValue: 'У',
        code: 'KeyE',
        isPressed: false,
      },
      {
        value: 'r',
        shiftValue: 'R',
        secondaryValue: 'к',
        secondaryShiftValue: 'К',
        code: 'KeyR',
        isPressed: false,
      },
      {
        value: 't',
        shiftValue: 'T',
        secondaryValue: 'е',
        secondaryShiftValue: 'Е',
        code: 'KeyT',
        isPressed: false,
      },
      {
        value: 'y',
        shiftValue: 'Y',
        secondaryValue: 'н',
        secondaryShiftValue: 'Н',
        code: 'KeyY',
        isPressed: false,
      },
      {
        value: 'u',
        shiftValue: 'U',
        secondaryValue: 'г',
        secondaryShiftValue: 'Г',
        code: 'KeyU',
        isPressed: false,
      },
      {
        value: 'i',
        shiftValue: 'I',
        secondaryValue: 'ш',
        secondaryShiftValue: 'Ш',
        code: 'KeyI',
        isPressed: false,
      },
      {
        value: 'o',
        shiftValue: 'O',
        secondaryValue: 'щ',
        secondaryShiftValue: 'Щ',
        code: 'KeyO',
        isPressed: false,
      },
      {
        value: 'p',
        shiftValue: 'P',
        secondaryValue: 'з',
        secondaryShiftValue: 'З',
        code: 'KeyP',
        isPressed: false,
      },
      {
        value: '[',
        shiftValue: '{',
        secondaryValue: 'х',
        secondaryShiftValue: 'Х',
        code: 'BracketLeft',
        isPressed: false,
      },
      {
        value: ']',
        shiftValue: '}',
        secondaryValue: 'ъ',
        secondaryShiftValue: 'Ъ',
        code: 'BracketRight',
        isPressed: false,
      },
      {
        value: 'DEL',
        shiftValue: 'DEL',
        secondaryValue: 'DEL',
        secondaryShiftValue: 'DEL',
        code: 'Delete',
        isPressed: false,
      },
    ],
    [
      {
        value: 'CAPS',
        shiftValue: 'CAPS',
        secondaryValue: 'CAPS',
        secondaryShiftValue: 'CAPS',
        code: 'CapsLock',
        isPressed: false,
      },
      {
        value: 'a',
        shiftValue: 'A',
        secondaryValue: 'ф',
        secondaryShiftValue: 'Ф',
        code: 'KeyA',
        isPressed: false,
      },
      {
        value: 's',
        shiftValue: 'S',
        secondaryValue: 'ы',
        secondaryShiftValue: 'Ы',
        code: 'KeyS',
        isPressed: false,
      },
      {
        value: 'd',
        shiftValue: 'D',
        secondaryValue: 'в',
        secondaryShiftValue: 'В',
        code: 'KeyD',
        isPressed: false,
      },
      {
        value: 'f',
        shiftValue: 'F',
        secondaryValue: 'а',
        secondaryShiftValue: 'А',
        code: 'KeyF',
        isPressed: false,
      },
      {
        value: 'g',
        shiftValue: 'G',
        secondaryValue: 'п',
        secondaryShiftValue: 'П',
        code: 'KeyG',
        isPressed: false,
      },
      {
        value: 'h',
        shiftValue: 'H',
        secondaryValue: 'р',
        secondaryShiftValue: 'Р',
        code: 'KeyH',
        isPressed: false,
      },
      {
        value: 'j',
        shiftValue: 'J',
        secondaryValue: 'о',
        secondaryShiftValue: 'О',
        code: 'KeyJ',
        isPressed: false,
      },
      {
        value: 'k',
        shiftValue: 'K',
        secondaryValue: 'л',
        secondaryShiftValue: 'Л',
        code: 'KeyK',
        isPressed: false,
      },
      {
        value: 'l',
        shiftValue: 'L',
        secondaryValue: 'д',
        secondaryShiftValue: 'Д',
        code: 'KeyL',
        isPressed: false,
      },
      {
        value: ';',
        shiftValue: ':',
        secondaryValue: 'ж',
        secondaryShiftValue: 'Ж',
        code: 'Semicolon',
        isPressed: false,
      },
      {
        value: "'",
        shiftValue: '"',
        secondaryValue: 'э',
        secondaryShiftValue: 'Э',
        code: 'Quote',
        isPressed: false,
      },
      {
        value: 'ENTER',
        shiftValue: 'ENTER',
        secondaryValue: 'ENTER',
        secondaryShiftValue: 'ENTER',
        code: 'Enter',
        isPressed: false,
      },
    ],
    [
      {
        value: 'SHIFT',
        shiftValue: 'SHIFT',
        secondaryValue: 'SHIFT',
        secondaryShiftValue: 'SHIFT',
        code: 'ShiftLeft',
        isPressed: false,
      },
      {
        value: '\\',
        shiftValue: '|',
        secondaryValue: '\\',
        secondaryShiftValue: '/',
        code: 'IntlBackslash',
        isPressed: false,
      },
      {
        value: 'z',
        shiftValue: 'Z',
        secondaryValue: 'я',
        secondaryShiftValue: 'Я',
        code: 'KeyZ',
        isPressed: false,
      },
      {
        value: 'x',
        shiftValue: 'X',
        secondaryValue: 'ч',
        secondaryShiftValue: 'Ч',
        code: 'KeyX',
        isPressed: false,
      },
      {
        value: 'c',
        shiftValue: 'C',
        secondaryValue: 'с',
        secondaryShiftValue: 'С',
        code: 'KeyC',
        isPressed: false,
      },
      {
        value: 'v',
        shiftValue: 'V',
        secondaryValue: 'м',
        secondaryShiftValue: 'М',
        code: 'KeyV',
        isPressed: false,
      },
      {
        value: 'b',
        shiftValue: 'B',
        secondaryValue: 'и',
        secondaryShiftValue: 'И',
        code: 'KeyB',
        isPressed: false,
      },
      {
        value: 'n',
        shiftValue: 'N',
        secondaryValue: 'т',
        secondaryShiftValue: 'Т',
        code: 'KeyN',
        isPressed: false,
      },
      {
        value: 'm',
        shiftValue: 'M',
        secondaryValue: 'ь',
        secondaryShiftValue: 'Ь',
        code: 'KeyM',
        isPressed: false,
      },
      {
        value: ',',
        shiftValue: '<',
        secondaryValue: 'б',
        secondaryShiftValue: 'Б',
        code: 'Comma',
        isPressed: false,
      },
      {
        value: '.',
        shiftValue: '>',
        secondaryValue: 'ю',
        secondaryShiftValue: 'Ю',
        code: 'Period',
        isPressed: false,
      },
      {
        value: '/',
        shiftValue: '?',
        secondaryValue: '.',
        secondaryShiftValue: ',',
        code: 'Slash',
        isPressed: false,
      },
      {
        value: '↑',
        shiftValue: '↑',
        secondaryValue: '↑',
        secondaryShiftValue: '↑',
        code: 'ArrowUp',
        isPressed: false,
      },
      {
        value: 'SHIFT',
        shiftValue: 'SHIFT',
        secondaryValue: 'SHIFT',
        secondaryShiftValue: 'SHIFT',
        code: 'ShiftRight',
        isPressed: false,
      }],
    [
      {
        value: 'CTRL',
        shiftValue: 'CTRL',
        secondaryValue: 'CTRL',
        secondaryShiftValue: 'CTRL',
        code: 'ControlLeft',
        isPressed: false,
      },
      {
        value: 'WIN',
        shiftValue: 'WIN',
        secondaryValue: 'WIN',
        secondaryShiftValue: 'WIN',
        code: 'MetaLeft',
        isPressed: false,
      },
      {
        value: 'ALT',
        shiftValue: 'ALT',
        secondaryValue: 'ALT',
        secondaryShiftValue: 'ALT',
        code: 'AltLeft',
        isPressed: false,
      },
      {
        value: ' ',
        shiftValue: ' ',
        secondaryValue: ' ',
        secondaryShiftValue: ' ',
        code: 'Space',
        isPressed: false,
      },
      {
        value: 'ALT',
        shiftValue: 'ALT',
        secondaryValue: 'ALT',
        secondaryShiftValue: 'ALT',
        code: 'AltRight',
        isPressed: false,
      },
      {
        value: 'WIN',
        shiftValue: 'WIN',
        secondaryValue: 'WIN',
        secondaryShiftValue: 'WIN',
        code: 'MetaRight',
        isPressed: false,
      },
      {
        value: 'CTRL',
        shiftValue: 'CTRL',
        secondaryValue: 'CTRL',
        secondaryShiftValue: 'CTRL',
        code: 'ControlRight',
        isPressed: false,
      },
      {
        value: '←',
        shiftValue: '←',
        secondaryValue: '←',
        secondaryShiftValue: '←',
        code: 'ArrowLeft',
        isPressed: false,
      },
      {
        value: '↓',
        shiftValue: '↓',
        secondaryValue: '↓',
        secondaryShiftValue: '↓',
        code: 'ArrowDown',
        isPressed: false,
      },
      {
        value: '→',
        shiftValue: '→',
        secondaryValue: '→',
        secondaryShiftValue: '→',
        code: 'ArrowRight',
        isPressed: false,
      },
    ],
  ],
  renderKeyboard() {
    this.keySetup.forEach((el) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row');
      el.forEach((iEl) => {
        let key;
        if (this.primaryLanguage) {
          key = new Key(this.shiftDown, iEl.value, iEl.shiftValue, iEl.isPressed, iEl.code)
            .createKey();
        } else {
          key = new Key(
            this.shiftDown,
            iEl.secondaryValue,
            iEl.secondaryShiftValue,
            iEl.isPressed,
            iEl.code,
          ).createKey();
        }
        key.addEventListener('click', (e) => {
          const text = e.target.innerText;
          if (text.length === 1) {
            textArea.value += text;
          }
        });
        keyboardRow.append(key);
      });
      keyBoardKeys.append(keyboardRow);
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
  e.preventDefault();
  virtualKeyboard.keySetup = virtualKeyboard.keySetup.map((row) => {
    const newRow = row.map((key) => {
      if (key.code === e.code) {
        return { ...key, isPressed: true };
      }
      return key;
    });
    return newRow;
  });
  if (!e.repeat) {
    virtualKeyboard.rerenderKeyboard();
  }
  const touchedKey = document.querySelector(`.${e.code}`);
  if (touchedKey.innerHTML.length === 1) {
    textArea.value += touchedKey.innerHTML;
  }
});

document.addEventListener('keyup', (e) => {
  virtualKeyboard.keySetup = virtualKeyboard.keySetup.map((row) => {
    const newRow = row.map((key) => {
      if (key.code === e.code) {
        return { ...key, isPressed: false };
      }
      return key;
    });
    return newRow;
  });
  virtualKeyboard.rerenderKeyboard();
});

document.addEventListener('keydown', (e) => {
  if (e.altKey && e.ctrlKey) {
    virtualKeyboard.primaryLanguage = !virtualKeyboard.primaryLanguage;
    virtualKeyboard.rerenderKeyboard();
  }
});
