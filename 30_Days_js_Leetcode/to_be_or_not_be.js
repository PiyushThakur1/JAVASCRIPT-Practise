let expect = function (val) {
  return {
    toBe(value) {
      if (val !== value) throw new Error("Not Equal");
      return true;
    },
    toNotBe(value) {
      if (val === value) throw new Error("Equal");
      return true;
    },
  };
};
