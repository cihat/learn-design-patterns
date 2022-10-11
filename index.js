import singletonCounter from "./singleton-pattern/counter-class.js";

singletonCounter.increment();
singletonCounter.increment();
singletonCounter.increment();
console.log(singletonCounter.getCount()); // 3