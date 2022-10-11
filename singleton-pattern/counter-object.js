let count = 0;

const singletonCounter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
  getCount() {
    return count;
  },
};

Object.freeze(singletonCounter);

export default singletonCounter;
