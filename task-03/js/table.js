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
    console.log(tableContent);
    renderTable();
    e.preventDefault();
  });

  function renderTable() {
    clearTable();
  }

  function clearTable() {
    var newTable = table.cloneNode(false);
    table.parentElement.replaceChild(newTable, table);
  }

  function getConfig() {
    var res = [
      +colStartInput.value,
      +rowStartInput.value,
      +tableSizeInput.value
    ];
    return res;
  }
}