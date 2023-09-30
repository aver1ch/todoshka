window.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add');
    var content = 1000;
    const table = document.querySelector('.tableOfTargets'); // Используйте querySelector вместо getElementById
  
    function addElement() {
      console.warn("The user wants to add a cell");
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');
    
      cell1.textContent = content;
      cell2.textContent = content;
  
      row.appendChild(cell1);
      row.appendChild(cell2);
      table.appendChild(row);
    }
  
    addButton.addEventListener('click', addElement);
  });
  