const menuBtn = document.querySelector('.menu');
const menuModal = document.querySelector('.menu-modal');
const closeBtn = document.querySelector('.x-mark');
const menuContent = document.querySelector('.menu-list')
const container = document.querySelector('.container-wrapper')

menuBtn.addEventListener('click', () => {
    menuModal.classList.add('slide')
    container.classList.add('blur');
})

closeBtn.addEventListener('click', () => {
    menuModal.classList.remove('slide')
    container.classList.remove('blur');
})

menuModal.addEventListener('click', () => {
    menuModal.classList.remove('slide')
    container.classList.remove('blur');
})


// interacting with the search-bar

const searchBar = document.getElementById('search');
const searchModal = document.querySelector('.search-modal');
const esc = document.querySelector('.escape');

searchBar.addEventListener('click', () => {
    searchModal.classList.add('show-search')
    container.classList.add('blur');
});

esc.addEventListener('click', () => {
    searchModal.classList.remove('show-search')
    container.classList.remove('blur');
});

// searchModal.addEventListener('click', () => {
//     searchModal.classList.remove('show-search')
//     container.classList.remove('blur');
// });

// carousel {the tough one, sigh!}



