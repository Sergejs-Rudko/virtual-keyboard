import { Key } from './key.js';

const body = document.querySelector('body');

const virtualKeyboard = {
  caretPosition: null,
  primaryLanguage: true,
  textArea: '',
  keySetup: [
    [
      {
        value: '`',
        shiftValue: '~',
        secondaryValue: 'ё',
        secondaryShiftValue: '',
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
        shiftValue: '',
        secondaryValue: 'й',
        secondaryShiftValue: '',
        code: 'KeyQ',
        isPressed: false,
      },
      {
        value: 'w',
        shiftValue: '',
        secondaryValue: 'ц',
        secondaryShiftValue: '',
        code: 'KeyW',
        isPressed: false,
      },
      {
        value: 'e',
        shiftValue: '',
        secondaryValue: 'у',
        secondaryShiftValue: '',
        code: 'KeyE',
        isPressed: false,
      },
      {
        value: 'r',
        shiftValue: '',
        secondaryValue: 'к',
        secondaryShiftValue: '',
        code: 'KeyR',
        isPressed: false,
      },
      {
        value: 't',
        shiftValue: '',
        secondaryValue: 'е',
        secondaryShiftValue: '',
        code: 'KeyT',
        isPressed: false,
      },
      {
        value: 'y',
        shiftValue: '',
        secondaryValue: 'н',
        secondaryShiftValue: '',
        code: 'KeyY',
        isPressed: false,
      },
      {
        value: 'u',
        shiftValue: '',
        secondaryValue: 'г',
        secondaryShiftValue: '',
        code: 'KeyU',
        isPressed: false,
      },
      {
        value: 'i',
        shiftValue: '',
        secondaryValue: 'ш',
        secondaryShiftValue: '',
        code: 'KeyI',
        isPressed: false,
      },
      {
        value: 'o',
        shiftValue: '',
        secondaryValue: 'щ',
        secondaryShiftValue: '',
        code: 'KeyO',
        isPressed: false,
      },
      {
        value: 'p',
        shiftValue: '',
        secondaryValue: 'з',
        secondaryShiftValue: '',
        code: 'KeyP',
        isPressed: false,
      },
      {
        value: '[',
        shiftValue: '{',
        secondaryValue: 'х',
        secondaryShiftValue: '',
        code: 'BracketLeft',
        isPressed: false,
      },
      {
        value: ']',
        shiftValue: '}',
        secondaryValue: 'ъ',
        secondaryShiftValue: '',
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
        shiftValue: '',
        secondaryValue: 'ф',
        secondaryShiftValue: '',
        code: 'KeyA',
        isPressed: false,
      },
      {
        value: 's',
        shiftValue: '',
        secondaryValue: 'ы',
        secondaryShiftValue: '',
        code: 'KeyS',
        isPressed: false,
      },
      {
        value: 'd',
        shiftValue: '',
        secondaryValue: 'в',
        secondaryShiftValue: '',
        code: 'KeyD',
        isPressed: false,
      },
      {
        value: 'f',
        shiftValue: '',
        secondaryValue: 'а',
        secondaryShiftValue: '',
        code: 'KeyF',
        isPressed: false,
      },
      {
        value: 'g',
        shiftValue: '',
        secondaryValue: 'п',
        secondaryShiftValue: '',
        code: 'KeyG',
        isPressed: false,
      },
      {
        value: 'h',
        shiftValue: '',
        secondaryValue: 'р',
        secondaryShiftValue: '',
        code: 'KeyH',
        isPressed: false,
      },
      {
        value: 'j',
        shiftValue: '',
        secondaryValue: 'о',
        secondaryShiftValue: '',
        code: 'KeyJ',
        isPressed: false,
      },
      {
        value: 'k',
        shiftValue: '',
        secondaryValue: 'л',
        secondaryShiftValue: '',
        code: 'KeyK',
        isPressed: false,
      },
      {
        value: 'l',
        shiftValue: '',
        secondaryValue: 'д',
        secondaryShiftValue: '',
        code: 'KeyL',
        isPressed: false,
      },
      {
        value: ';',
        shiftValue: ':',
        secondaryValue: 'ж',
        secondaryShiftValue: '',
        code: 'Semicolon',
        isPressed: false,
      },
      {
        value: '\'',
        shiftValue: '"',
        secondaryValue: 'э',
        secondaryShiftValue: '',
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
        shiftValue: '',
        secondaryValue: 'я',
        secondaryShiftValue: '',
        code: 'KeyZ',
        isPressed: false,
      },
      {
        value: 'x',
        shiftValue: '',
        secondaryValue: 'ч',
        secondaryShiftValue: '',
        code: 'KeyX',
        isPressed: false,
      },
      {
        value: 'c',
        shiftValue: '',
        secondaryValue: 'с',
        secondaryShiftValue: '',
        code: 'KeyC',
        isPressed: false,
      },
      {
        value: 'v',
        shiftValue: '',
        secondaryValue: 'м',
        secondaryShiftValue: '',
        code: 'KeyV',
        isPressed: false,
      },
      {
        value: 'b',
        shiftValue: '',
        secondaryValue: 'и',
        secondaryShiftValue: '',
        code: 'KeyB',
        isPressed: false,
      },
      {
        value: 'n',
        shiftValue: '',
        secondaryValue: 'т',
        secondaryShiftValue: '',
        code: 'KeyN',
        isPressed: false,
      },
      {
        value: 'm',
        shiftValue: '',
        secondaryValue: 'ь',
        secondaryShiftValue: '',
        code: 'KeyM',
        isPressed: false,
      },
      {
        value: ',',
        shiftValue: '<',
        secondaryValue: 'б',
        secondaryShiftValue: '',
        code: 'Comma',
        isPressed: false,
      },
      {
        value: '.',
        shiftValue: '>',
        secondaryValue: 'ю',
        secondaryShiftValue: '',
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
  shiftIsDown: false,
  capsLockIsDown: false,
  deletePressed() {
    const textarea = document.querySelector('.screen');
    const caretPosition = textarea.selectionStart;
    if (!caretPosition || caretPosition === this.textArea.length) {
      return;
    }
    const textArray = this.textArea.split('');
    textArray.splice(caretPosition, 1);
    this.textArea = textArray.join('');
    this.caretPosition = caretPosition;
    this.rerenderKeyboard();
  },
  backspacePressed() {
    const textarea = document.querySelector('.screen');
    const caretPosition = textarea.selectionStart;
    if (caretPosition === this.textArea.length) {
      this.textArea = this.textArea.slice(0, -1);
      this.caretPosition = caretPosition - 1;
      if (this.caretPosition < 0) {
        this.caretPosition = 0;
      }
    } else {
      const textArray = this.textArea.split('');
      textArray.splice(caretPosition - 1, 1);
      this.textArea = textArray.join('');
      this.caretPosition = caretPosition - 1;
      if (this.caretPosition < 0) {
        this.caretPosition = 0;
      }
    }
    this.rerenderKeyboard();
  },
  enterPressed() {
    const textarea = document.querySelector('.screen');
    const caretPosition = textarea.selectionStart;
    const textArray = this.textArea.split('');
    textArray.splice(caretPosition, 0, '\n');
    this.textArea = textArray.join('');
    this.rerenderKeyboard();
  },
  toggleCapsLock() {
    this.capsLockIsDown = !this.capsLockIsDown;
    this.keySetup[2][0].isPressed = this.capsLockIsDown; // shortcut to caps button
    this.rerenderKeyboard();
  },
  toggleShift() {
    this.shiftIsDown = !this.shiftIsDown;
    this.rerenderKeyboard();
  },
  keyDown(code) {
    this.keySetup = this.keySetup.map((row) => {
      const newRow = row.map((key) => {
        if (key.code === code && code !== 'CapsLock') {
          return {
            ...key,
            isPressed: true,
          };
        }
        return key;
      });
      return newRow;
    });
    const text = document.querySelector(`.${code}`).innerHTML;
    if (text.length === 1) {
      const textarea = document.querySelector('.screen');
      const caretPosition = textarea.selectionStart;
      const textArray = this.textArea.split('');
      textArray.splice(caretPosition, 0, `${text}`);
      this.textArea = textArray.join('');
      this.caretPosition = caretPosition + 1;
      this.rerenderKeyboard();
    }
    this.rerenderKeyboard();
  },
  keyUp(code) {
    this.keySetup = this.keySetup.map((row) => {
      const newRow = row.map((key) => {
        if (key.code === code && code !== 'CapsLock') {
          return {
            ...key,
            isPressed: false,
          };
        }
        return key;
      });
      return newRow;
    });
    this.rerenderKeyboard();
  },
  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard__keys');
    this.keySetup.forEach((row) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row');
      row.forEach((k) => {
        let key;
        if (this.primaryLanguage) {
          key = new Key(
            this.shiftIsDown,
            k.value,
            k.shiftValue,
            k.code,
            k.isPressed,
            this.capsLockIsDown,
          ).createKey();
        } else {
          key = new Key(
            this.shiftIsDown,
            k.secondaryValue,
            k.secondaryShiftValue,
            k.code,
            k.isPressed,
            this.capsLockIsDown,
          ).createKey();
        }
        if (k.code === 'Enter') {
          key.addEventListener('mousedown', () => {
            this.enterPressed();
          });
        }
        if (k.code === 'Backspace') {
          key.addEventListener('mousedown', () => {
            this.backspacePressed();
          });
        }
        if (k.code === 'Delete') {
          key.addEventListener('mousedown', () => {
            this.deletePressed();
          });
        }
        key.addEventListener('mousedown', (e) => {
          const code = e.target.classList[1];
          this.keyDown(code);
        });
        key.addEventListener('mouseup', (e) => {
          const code = e.target.classList[1];
          this.keyUp(code);
        });
        keyboardRow.append(key);
      });
      keyboardKeys.append(keyboardRow);
      keyboard.append(keyboardKeys);
    });
    return keyboard;
  },
  render() {
    //  Create textarea and assign it's value
    const textArea = document.createElement('textarea');
    textArea.classList.add('screen');
    textArea.value = this.textArea;
    textArea.setSelectionRange(this.caretPosition, this.caretPosition);
    textArea.focus();
    const keyboard = this.createKeyboard();
    //  Appending everything
    body.append(textArea);
    body.append(keyboard);
  },
  rerenderKeyboard() {
    const textArea = document.querySelector('.screen');
    const keyboard = document.querySelector('.keyboard');
    body.removeChild(textArea);
    body.removeChild(keyboard);
    this.render();
  },
};

virtualKeyboard.render();

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.code.includes('Shift') && !e.repeat) {
    virtualKeyboard.toggleShift();
  }
  if (e.code === 'CapsLock' && !e.repeat) {
    virtualKeyboard.toggleCapsLock();
  }
  if (e.altKey && e.ctrlKey) {
    virtualKeyboard.primaryLanguage = !virtualKeyboard.primaryLanguage;
    virtualKeyboard.rerenderKeyboard();
  }
  if (e.code === 'Enter') {
    virtualKeyboard.enterPressed();
  }
  if (e.code === 'Backspace') {
    virtualKeyboard.backspacePressed();
  }
  if (e.code === 'Delete') {
    virtualKeyboard.deletePressed();
  }
  virtualKeyboard.keyDown(e.code);
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.code.includes('Shift') && !e.repeat) {
    virtualKeyboard.toggleShift();
  }
  virtualKeyboard.keyUp(e.code);
});
