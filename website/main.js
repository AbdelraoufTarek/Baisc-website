const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click', function (event) {
  event.preventDefault(); 
  dropdownMenu.classList.toggle('show'); 

  dropdownToggle.classList.toggle('rotate');
});

window.addEventListener('click', function (event) {
  if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('show');
    dropdownToggle.classList.remove('rotate');
  }
});

