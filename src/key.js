export class Key {
  constructor(shiftDown, value, shiftValue, isPressed, code) {
    this.shiftDown = shiftDown;
    this.value = value;
    this.shiftValue = shiftValue;
    this.isPressed = isPressed;
    this.code = code;
  }

  createKey() {
    const key = document.createElement('div');
    key.classList.add('key');
    const keyContent = document.createElement('div');
    keyContent.classList.add('key__content');
    keyContent.classList.add(`${this.code}`);
    if (!this.shiftDown) {
      keyContent.innerText = this.value;
    } else {
      keyContent.innerText = this.shiftValue;
    }
    key.append(keyContent);
    key.addEventListener('mousedown', () => {
      key.classList.add('key--active');
    });
    key.addEventListener('mouseup', () => {
      key.classList.remove('key--active');
    });
    if (this.isPressed) {
      key.classList.add('key--active');
    }
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
