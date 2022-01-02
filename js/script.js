cconst cvDropdown=document.querySelector('.header .cv-dropdown');
const cvIconDropdown=document.querySelector('.header .cv-icon img');
cvIconDropdown.addEventListener('click', function(e){
    // if(e.target.classList.contains('cv-icon')){
        cvDropdown.classList.toggle('active');
        cvIconDropdown.classList.toggle('active');
    // }
});

const portfolioHero=document.querySelector('.main-content .portfolio-hero');
const portfolios=document.querySelectorAll('.portfolios .portfolio');
portfolios.forEach(function(el){
    el.addEventListener('click', function(e){
        tmpSrc=portfolioHero.getElementsByTagName('img')[0].src;
        portfolioHero.getElementsByTagName('img')[0].src=el.getElementsByTagName('img')[0].src;
        el.getElementsByTagName('img')[0].src=tmpSrc;
        tmpCaption=portfolioHero.getElementsByTagName('p')[0].innerHTML;
        portfolioHero.getElementsByTagName('p')[0].innerHTML=el.getElementsByTagName('p')[0].innerHTML;
        el.getElementsByTagName('p')[0].innerHTML=tmpCaption;
    });
});
