let counter = 0;

const getData = () => {
  console.log("Debounce Data .....", counter++);
};

const getDataThrottle = () => {
  console.log("Throttle Data .....", counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
const debounceFunc = debounce(getData, 300);

const throttle = (fn, delay) => {
  let throttleFlag = true;
  return function () {
    let context = this,
      args = arguments;
    if (throttleFlag) {
      fn.apply(context, args);
      throttleFlag = false;
      setTimeout(() => {
        throttleFlag = true;
      }, delay);
    }
  };
};
const throttleFunc = throttle(getDataThrottle, 300);
