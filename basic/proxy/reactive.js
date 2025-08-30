'use strict';

function reactive(target) {
  const listeners = new Set();

  const proxy = new Proxy(target, {
    get(obj, prop) {
      console.log("GET:", prop);
      return obj[prop];
    },
    set(obj, prop, value) {
      console.log("SET:", prop, "=", value);
      obj[prop] = value;
      listeners.forEach(fn => fn()); // викликаємо "оновлення"
      return true;
    }
  });

  // дозволимо "підписуватись" на зміни
  proxy.watch = (fn) => listeners.add(fn);

  return proxy;
}

// Використання:
const state = reactive({ count: 0 });

// підписка на зміни (імітація рендера Vue)
state.watch(() => {
  console.log("Render → count =", state.count);
});

state.count++; // => "SET: count = 1" → "Render → count = 1"
state.count++; // => "SET: count = 2" → "Render → count = 2"