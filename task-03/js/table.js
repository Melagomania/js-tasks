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
    renderTable(tableContent);
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
    addClickListener();
  }

  function addMouseoverListener() {
    table.addEventListener('mouseover', function(e) {
      if(e.target.tagName === "TD") {
        highlight(e.target);
      }
    });
    table.addEventListener('mouseout', function(e) {
      if(e.target.tagName === "TD") {
        highlight(e.target);
      }
    });
  }

  function highlight(target) {
    var   thead = document.getElementsByTagName('thead')[0],    
          parent = target.parentNode,
          rowHeading = parent.children[0],
          colHeading = thead.firstChild.children[target.cellIndex];
    
    target.classList.toggle('highlighted');
    rowHeading.classList.toggle('highlighted');
    colHeading.classList.toggle('highlighted');
  }

  function addClickListener() {
    table.addEventListener('click', function(e) {
      var target = e.target,
          currentRow = target.parentNode, 
          upperRow = target.parentNode.previousSibling;
      if(target.tagName !== "TH") {
        if(e.ctrlKey) {
          currentRow.parentNode.removeChild(currentRow);
        } else if(target.parentNode !== target.parentNode.parentNode.firstChild) {
          currentRow.insertAdjacentElement('afterEnd', upperRow);
        }
      }     
    });
  }

  function clearTable() {
    while(table.firstChild) {
      table.removeChild(table.firstChild);
    }
  }
}