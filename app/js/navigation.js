
var toggle = document.querySelector('#navigation-button');
var menu = document.querySelector('#menu-list');
var menuItems = document.querySelectorAll('#menu-list li a');

// Hides navigation on load
// Allows navigation to be visible if JS fails to load or is blocked 
window.onload = function() {
    menu.classList.remove("is-active");
};

toggle.addEventListener('click', function(){
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active'); 
    this.setAttribute('aria-expanded', 'true');
    //menuItems[0].focus();
  }
});