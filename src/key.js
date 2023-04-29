export class Key {
  constructor(shiftDown, value, shiftValue, code, isPressed, capsLockDown) {
    this.shiftDown = shiftDown;
    this.value = value;
    this.shiftValue = shiftValue;
    this.code = code;
    this.isPressed = isPressed;
    this.capsLockDown = capsLockDown;
  }

  createKey() {
    const key = document.createElement('div');
    key.classList.add('key');
    if (this.isPressed) {
      key.classList.add('key--active');
    }
    const keyContent = document.createElement('div');
    keyContent.classList.add('key__content');
    keyContent.classList.add(`${this.code}`);
    if (this.shiftDown && !this.shiftValue && !this.capsLockDown) {
      keyContent.innerText = this.value.toUpperCase();
    } else if (this.shiftDown && this.shiftValue) {
      keyContent.innerText = this.shiftValue;
    } else if (this.capsLockDown && (this.value.search(/^[a-zA-Z0-9\u0400-\u04FF]+$/) !== -1) && !this.shiftDown) {
      keyContent.innerText = this.value.toUpperCase();
    } else if (this.shiftDown && this.capsLockDown) {
      if (this.shiftValue) {
        keyContent.innerText = this.shiftValue;
      } else {
        keyContent.innerText = this.value;
      }
    } else {
      keyContent.innerText = this.value;
    }
    key.append(keyContent);
    key.addEventListener('mousedown', () => {
      key.classList.add('key--active');
    });
    key.addEventListener('mouseup', () => {
      key.classList.remove('key--active');
    });
    if (this.value.length !== 1) {
      key.classList.add('key--l');
    }
    if (this.value === ' ') {
      key.classList.add('key--xxl');
    }
    if (this.value === 'ENTER' || this.value === 'CAPS') {
      key.classList.add('key--xl');
    }

    return key;
  }
}

export default Key;
