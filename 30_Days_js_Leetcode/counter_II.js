var createCounter = function (init) {
  let copy = init;
  return {
    increment() {
      return ++init;
    },
    decrement() {
      return --init;
    },
    reset() {
      init = copy;
      return init;
    },
  };
};
