// function responsible for producing data for multiplication table
function multiplicationTable(colStart, rowStart, size) {
  if(!(colStart >= 1 && rowStart >= 1 && size >= 1) || !(typeof colStart === 'number' && typeof rowStart === 'number' && typeof size === 'number')) {
    throw new Error('Function requires three integer arguments that are greater or equalt than 1');
  }
  var result = [];
  var headings = generateColHeadings(colStart);
  console.log(headings);
  result.push(headings);
  console.log(result);  
  result = result.concat(calculateRows(rowStart, headings)); 

  function generateColHeadings(colStart) {
    var res = [];
    for(let i = 0; i <= size; i++) {
      if(i === 0 ) {
        res[i] = null;
      } else {
        res[i] = colStart++;
      }
    }
    return res;
  }

  function calculateRows(rowStart, colHeadings) {
    colHeadings[0] = 1;
    var res = [];
    var mul = rowStart;
    for(let i = 0; i < size; i++){
      var row = [];
      for(let j of colHeadings) {
        row.push(j * mul);
      }
      mul++;
      res.push(row);
    }
    return res;
  }
  result[0][0] = null;
  return(result);
}
console.log(multiplicationTable(1, 3, 4));
