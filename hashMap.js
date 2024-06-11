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
      return true;
    }
  }

//   print() {
//     console.log(this.buckets);
//   }
}

const hashMap = new HashMap();
hashMap.set("Doug", "Melo");
hashMap.set("Duda", "Pessoa");
hashMap.set("Celia", "Baptista");
console.log(hashMap.remove("Dex"));

