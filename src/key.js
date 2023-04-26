export class Key {
  constructor(shiftDown, value, shiftValue, isPressed) {
    this.shiftDown = shiftDown;
    this.value = value;
    this.shiftValue = shiftValue;
    this.isPressed = isPressed;
  }

  createKey() {
    const key = document.createElement('div');
    key.classList.add('key');

    const keyContent = document.createElement('div');
    keyContent.classList.add('key__content');
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
    return key;
  }
}

export default Key;
