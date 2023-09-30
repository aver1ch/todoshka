window.addEventListener('DOMContentLoaded', () => {
    var content = 1000;
    const deleteButton = document.getElementById("add");
    const table = document.querySelector('.tableOfTargets'); // Используйте querySelector вместо getElementById
  
    function addElement() {
      console.warn("The user wants to add a target");
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

  window.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById("delete");
    function deleteElement() {
      console.warn("The user wants to delete a target");
      const row = document.deleteElement('tr');
      const cell1 = document.deleteElement('td');
      const cell2 = document.deleteElement('td');
      /*row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(row);*/
    }

    deleteButton.addEventListener('click', deleteElement);
  })
  