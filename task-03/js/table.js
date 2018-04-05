// table creation and interactions
window.onload = function() {
  var   table = document.getElementsByClassName('table')[0],
  renderBtn = document.getElementsByClassName('js-cta-render-table')[0],
  colStartInput = document.getElementsByClassName('js-config-output-cols')[0],
  rowStartInput = document.getElementsByClassName('js-config-output-rows')[0],
  tableSizeInput = document.getElementsByClassName('js-config-output-size')[0],
  
  config,
  tableContent;
  
  renderBtn.addEventListener('click', function(e) {
    config = getConfig();
    tableContent = multiplicationTable(...config);
    var dt = new Date();
    renderTable(tableContent);
    console.log(new Date - dt);
    e.preventDefault();
  });
  
  function getConfig() {
    var res = [
      +colStartInput.value,
      +rowStartInput.value,
      +tableSizeInput.value
    ];
    return res;
  }

  function renderTable(tableContent) {
    clearTable();
    var   tableFragment = document.createDocumentFragment(),
          thead = tableFragment.appendChild(document.createElement('thead')),
          tbody = tableFragment.appendChild(document.createElement('tbody'));  

    for(let i = 0; i < tableContent.length; i++) {
      let row = document.createElement('tr');
      if(i === 0) {
        thead.appendChild(row);
      } else {
        tbody.appendChild(row);
      }
      for(let j = 0; j < tableContent[i].length; j++) {
        let elementToInser = i === 0 ? 'th': j === 0 ? 'th': 'td';
        let element = document.createElement(elementToInser);
        element.innerText = tableContent[i][j];
        row.appendChild(element);
      }
    }
    table.appendChild(tableFragment);
    addMouseoverListener();
  }

  function addMouseoverListener() {
    table.addEventListener('mouseover', function(e) {
      var target = e.target;
      var parent = target.parentNode;
      var rowHeading =    parent.children[0],
                          colHeading = target.parentNode.parentNode.parentNode.children[0].children[0].children[target.cellIndex];

      target.classList.add('highlighted');
      rowHeading.classList.add('highlighted');
      colHeading.classList.add('highlighted');
      });
    table.addEventListener('mouseout', function(e) {
      var target = e.target;
      var parent = target.parentNode;
      var rowHeading =    parent.children[0],
                          colHeading = target.parentNode.parentNode.parentNode.children[0].children[0].children[target.cellIndex];

      target.classList.remove('highlighted');
      rowHeading.classList.remove('highlighted');
      colHeading.classList.remove('highlighted');
    });
  }

  function clearTable() {
    var newTable = table.cloneNode(false);
    table.parentElement.replaceChild(newTable, table);
    table = document.getElementsByClassName('table')[0];
  }
}