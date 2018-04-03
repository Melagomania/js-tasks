function createCounter(startCount = 0, incrementor = 1) {
  if(!(typeof(startCount) === 'number' && typeof(incrementor) === 'number' ) ) {
    throw new SyntaxError('Only numeric params are allowed');
  }
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