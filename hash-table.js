export class HashTable {
  constructor({ size = 13 }) {
    this._store = [];
    this._size = size;
  }

  get dump() {
    return this._store;
  }

  set dump(_store = []) {
    this._store = _store;
  }

  setElement(key, value) {
    const idx = this.hash(key);

    if (!this._store[idx]) {
      this._store[idx] = [[key, value]];
    } else {
      const list = this._store[idx];
      const matchingIdx = HashTable.findMatchIndex(list, key);

      if (matchingIdx) {
        list[matchingIdx] = [key, value];
      }

      list.push([key, value]);
    }

    return this;
  }

  getElement(key) {
    if (this._store[this.hash(key)]) {
      const list = this._store[this.hash(key)];
      const index = HashTable.findMatchIndex(list, key);

      if (index !== undefined || index !== null) {
        return list[index][1];
      }
    }
  }

  static findMatchIndex(list, key) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][0] === key) return i;
    }
  }

  hash(string) {
    let index = 0;

    for (let i = 0; i < string.length; i++) {
      index += string.charCodeAt(i) * i + 1;
    }

    return index % this._size;
  }
}
