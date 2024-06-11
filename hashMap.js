class HashMap {
  constructor(buckets, capacity, loadFactor, growBuckets) {
    this.buckets = new Array(16); // Fixed array size
    this.capacity = this.buckets.length;
    this.loadFactor = 0.8 * this.capacity;
    this.growBuckets = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % 16;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push({ key, value });
    this.growBuckets++;
  }

  get(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      const correctKey = this.buckets[index].find((a) => {
        return a.key === key;
      });
      if (correctKey) {
        return correctKey.value;
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      return true;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      bucket.splice(i, 1);
      this.growBuckets--;
      return true;
    }
  }

  length() {
    const bucket = this.buckets;
    let count = 0;
    for (let i = 0; i < bucket.length; i++) {
      bucket[i] !== undefined ? count++ : (count += 0);
    }
    return count;
  }

  clear() {
    const bucket = this.buckets;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] !== undefined) {
        for (let k = 0; k < bucket[i].length; k++) {
          bucket[i].splice(k, 1);
        }
      }
    }
    this.growBuckets -= this.growBuckets;
  }

  keys() {
    const arrayOfKeys = [];
    const bucket = this.buckets;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] !== undefined) {
        const key = bucket[i].find((a) => {
          arrayOfKeys.push(a.key);
        });
      }
    }
    return arrayOfKeys;
  }

  values() {
    const arrayOfValues = [];
    const bucket = this.buckets;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] !== undefined) {
        const value = bucket[i].find((a) => {
          arrayOfValues.push(a.value);
        });
      }
    }
    return arrayOfValues;
  }

  entries() {
    const arrayOfEntries = [];
    const bucket = this.buckets;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] !== undefined) {
        const entries = bucket[i].find((a) => {
          arrayOfEntries.push([a.key, a.value]);
        });
      }
    }
    return arrayOfEntries;
  }
}

const hashMap = new HashMap();
