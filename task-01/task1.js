function createCounter(startCount = 0, incrementor = 1) {
  var count = startCount;
  var counted = false;
  function counter() {
    if(!counted) {
      counted = true;
      return count;
    } else {
      return count += incrementor;
    }
  }

  counter.resetCounter = function() {
    counted = false;    
    count = startCount;
    return undefined;
  }

  return counter;
}