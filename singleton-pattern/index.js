import singletonCounter from "./counter-object.js";

singletonCounter.increment();
singletonCounter.increment();
singletonCounter.increment();

console.log(singletonCounter.getCount());