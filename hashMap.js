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
}

const hashMap = new HashMap();

