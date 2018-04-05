//ES5
function passToCallbackES5() {
  var args = [].slice.call(arguments, 0);
  var callback = args.pop();
  if(typeof callback !== "function") {
    throw new Error('Callback function is reqired as last argument');
  }
  return callback.apply(null, args);
}

//ES6
function passToCallbackES6 ()  {
  let args = Array.from(arguments);
  let callback = args.pop();
  if(typeof callback !== "function") {
    throw new Error('Callback function is reqired as last argument');
  }
  return callback(...args);
} 


//ES5
console.log(
  passToCallbackES5(1, 2, 3, 5, (...args) => args.map(num => num * 2)),
  passToCallbackES5(4, 3, 2, 1, (...args) => args.reduce((cur, prev) => prev * cur))
);
//ES6
console.log(
  passToCallbackES6(1, 2, 3, 5, (...args) => args.map(num => num * 2)),
  passToCallbackES6(4, 3, 2, 1, (...args) => args.reduce((cur, prev) => prev * cur))
)
