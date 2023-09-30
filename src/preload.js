window.addEventListener('DOMContentLoaded', () => 
{
  const addButton = document.getElementById("add");

  function addElement() {
    console.warn("Added a target");

  }
  
  addButton.addEventListener('click', addElement);
});

window.addEventListener('DOMContentLoaded', () => 
{
  const showButton = document.getElementById("delete");
  
  function showTargetsToTarget() {
    console.warn("Deleted a target");

  }

  deleteButton.addEventListener('click', deleteElement);
})
  