const cvDropdown=document.querySelector('.header .cv-dropdown');
const cvIconDropdown=document.querySelector('.header .cv-icon');
cvIconDropdown.addEventListener('click', function(e){
    // if(e.target.classList.contains('cv-icon')){
        cvDropdown.classList.toggle('active');
        cvIconDropdown.classList.toggle('active');
    // }
});