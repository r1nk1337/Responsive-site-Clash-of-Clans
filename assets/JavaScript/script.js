let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal({
    distance:'95px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.image-text',{delay:200,origin:'top'});
sr.reveal('.navlist',{delay:200,origin:'top'});
sr.reveal('.social',{delay:200,origin:'left'});
sr.reveal('.logo',{delay:200,origin:'top'});
sr.reveal('.img-arbarian',{delay:200,origin:'right'});
sr.reveal('.down',{delay:200,origin:'bottom'});
